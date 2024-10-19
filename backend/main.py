import os
from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
from PIL import Image
import base64
import io

# Load environment variables
load_dotenv()

# Configure FastAPI
app = FastAPI()

# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Google Gemini AI
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

# Allowed file types for images
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Temporary uploads directory
uploads_dir = os.path.join(os.getcwd(), 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

@app.post("/analyze_image")
async def analyze_image(image_file: UploadFile = File(...), description: str = Form(...), language: str = Form('en')):
    if not allowed_file(image_file.filename):
        return {"error": "File type not allowed"}, 400

    try:
        # Save the uploaded image
        image_path = os.path.join(uploads_dir, image_file.filename)
        with open(image_path, "wb") as f:
            f.write(image_file.file.read())

        # Open the saved image for processing
        with Image.open(image_path) as img:
            # Step 1: Identify groceries from the image
            prompt_identify = "Identify all groceries from this image."
            response_identify = genai.GenerativeModel("gemini-1.5-flash").generate_content([prompt_identify, img])

            # Extract identified grocery items
            groceries = []
            for candidate in response_identify.candidates:
                if candidate.content.parts:
                    grocery_item = candidate.content.parts[0].text.strip().lower()
                    groceries.append(grocery_item)

            if not groceries:
                print("No groceries identified.")
                return {"error": "No groceries identified"}, 500

            # Log recognized groceries to terminal
            print(f"Recognized Groceries: {groceries}")

            # Step 2: Generate recipe using identified groceries and user description
            groceries_list = ', '.join(groceries)
            prompt_recipe = f"Using these groceries: {groceries_list}, generate a recipe with the following instructions: {description}"
            response_recipe = genai.GenerativeModel('gemini-1.5-pro').generate_content([prompt_recipe])

            # Final recipe response
            if hasattr(response_recipe, 'text'):
                recipe = response_recipe.text.strip()
                print(f"Generated Recipe: {recipe}")  # Log the generated recipe to the terminal
            else:
                recipe = "No recipe generated."
                print("No recipe generated.")

            return {"groceries": groceries, "recipe": recipe}

    except Exception as e:
        print(f"Error processing the image: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing the image: {e}")

