import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCamera = () => {
    navigate('/camera');
  };

  const handleCall = () => {
    navigate('/call'); // Navigate to CallPage
  };

  return (
    <Container>
      {/* Logo */}
      <LogoContainer>
        <Logo src="/logo-refrigerator-ramsay-removebg-preview (1).png" alt="Refrigerator Ramsay Logo" />
      </LogoContainer>

      {/* Project Introduction */}
      <Section>
        <Title>Welcome to Refrigerator Ramsay</Title>
        <Description>
          <p><strong>Refrigerator Ramsay</strong> is an AI-powered kitchen assistant designed to reduce food waste and optimize ingredient use:</p>
          <ul>
            <li>Combines Google Gemini AI for ingredient recognition and recipe generation.</li>
            <li>Integrates Hume EVI for interactive voice assistance.</li>
            <li>Users can snap a picture of their fridge or pantry, and the AI generates creative recipes.</li>
            <li>Helps make the most of the available ingredients to minimize waste.</li>
          </ul>
        </Description>
      </Section>

              {/* Problem Being Solved */}
      <Section>
        <SubTitle>The Problem</SubTitle>
        <ProblemContainer>
          <TextContainer>
            <p>
              Every year, millions of tons of food are wasted due to poor meal planning and lack of awareness about what's in our refrigerators. This food waste not only impacts our wallets but also contributes to harmful environmental effects, such as increased carbon footprints and the unnecessary use of resources.
            </p>
            <p>
              <strong>In fact, 40% of food in the United States is wasted annually.</strong> Much of this waste happens because people don't know what to cook with the ingredients they already have or let them spoil before use.
            </p>
            <p>
              Our mission with <strong>Refrigerator Ramsay</strong> is to minimize food waste by offering intelligent recipe suggestions based on the ingredients people already own.
            </p>
          </TextContainer>
          
          {/* Graph Image */}
          <ImageContainer>
            <img src="/20825.jpeg" alt="Food Waste Statistics" style={{ width: '100%', borderRadius: '10px' }} />
          </ImageContainer>
        </ProblemContainer>
      </Section>

            {/* Solution */}
            <Section>
        <SubTitle>The Solution</SubTitle>
        <SolutionContainer>
          <ul>
            <li>
              <strong>Image recognition:</strong> Using Google Gemini AI, users can identify ingredients from a simple photo.
            </li>
            <li>
              <strong>Smart recipe generation:</strong> AI creates dishes from available ingredients, reducing the likelihood of spoilage.
            </li>
            <li>
              <strong>Interactive assistant:</strong> Hume EVI provides real-time voice or text-based cooking advice, tips, and technique guidance.
            </li>
            <li>
              <strong>Result:</strong> Minimized food waste, smarter grocery usage, and a fun, personalized cooking experience.
            </li>
          </ul>
        </SolutionContainer>
      </Section>




            {/* Features */}
            <Section>
        <SubTitle>Key Features and Technologies</SubTitle>
        <FeaturesList>
          <li>
            <strong>Google Gemini AI for Ingredient Recognition:</strong> 
            Utilizing the power of Google's advanced AI, users can simply snap a photo of their fridge or pantry. The AI accurately recognizes and identifies the ingredients in the image. This technology eliminates the guesswork, ensuring you always know what you have on hand.
          </li>
          <li>
            <strong>AI-Driven Recipe Generation:</strong> 
            Based on the recognized ingredients, the AI generates creative, easy-to-follow recipes. This smart generation system ensures that your available ingredients are used efficiently, reducing the chance of spoilage and minimizing waste.
          </li>
          <li>
            <strong>Hume EVI for Interactive Cooking Assistance:</strong> 
            Integrated with Hume's Emotionally Intelligent Voice Interaction (EVI), users can receive real-time voice or text-based cooking guidance. This feature provides step-by-step instructions, cooking tips, and even personalized technique suggestions.
          </li>
          <li>
            <strong>Personalized, Data-Driven Meal Suggestions:</strong> 
            The AI learns from your ingredient usage patterns, preferences, and cooking history, offering personalized meal suggestions that align with your taste and cooking style.
          </li>
          <li>
            <strong>Reducing Food Waste with Smart Technology:</strong> 
            The combined power of ingredient recognition, recipe generation, and real-time assistance significantly reduces food waste. By helping you use what you have, <strong>Refrigerator Ramsay</strong> not only saves you money but also contributes to a more sustainable lifestyle.
          </li>
        </FeaturesList>
      </Section>


            {/* How It Works */}
            <Section>
        <SubTitle>How It Works</SubTitle>
        <Description>
          <p>
            <strong>Using Camera:</strong>
          </p>
          <ul>
            <li><strong>Step 1:</strong> Click the button below labeled <strong>"Use Camera"</strong> to start.</li>
            <li><strong>Step 2:</strong> You can either snap a picture of the groceries in front of you or manually upload a saved image from your device. Once the image is ready, click <strong>"Next"</strong>.</li>
            <li><strong>Step 3:</strong> Describe how you'd like the meal to be prepared. Be as specific as you want about cooking style, flavor preferences, or dietary needs.</li>
            <li><strong>Step 4:</strong> You'll receive a personalized recipe. Follow the step-by-step instructions to prepare your meal. Don't forget to refrigerate any leftovers to prevent waste!</li>
          </ul>

          <p>
            <strong>Using AI Chef Call:</strong>
          </p>
          <ul>
            <li><strong>Step 1:</strong> Click the button labeled <strong>"Call AI Chef"</strong> to initiate a voice interaction with our AI chef.</li>
            <li><strong>Step 2:</strong> Once the call interface is open, press <strong>"Start Call"</strong> to begin your conversation with the AI.</li>
            <li><strong>Step 3:</strong> You can talk to the AI chef to get real-time cooking advice, ask about ingredient substitutions, or get tips on cooking techniques. Use the <strong>"Mute"</strong> button to mute your microphone and press <strong>"End Call"</strong> when you're done.</li>
            <li><strong>Bonus:</strong> The AI chef is ready to assist you at any point during your cooking, so feel free to ask questions while you're preparing your meal!</li>
          </ul>
        </Description>
      </Section>

            {/* Working Section */}
            <Section>
        <SubTitle>Working</SubTitle>
        <Description>
          <p>
            Watch the video below to see <strong>Refrigerator Ramsay</strong> in action! This demonstration walks through the entire process, from scanning your fridge to generating personalized recipes and interacting with the AI chef.
          </p>
          
          {/* Embedded YouTube Video */}
          <VideoContainer>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/bNv-EJtd40s"
              title="Refrigerator Ramsay - Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </Description>
      </Section>




      {/* Navigation Buttons */}
      <BottomNav>
        <NavButton onClick={handleCamera}>
          <span>Use Camera</span>
        </NavButton>
        <NavButton onClick={handleCall}>
          <span>Call AI Chef</span>
        </NavButton>
      </BottomNav>

      {/* Footer */}
      <Footer>
        <p>&copy; 2024 Sherwin Jathanna. Used for Cal Hacks 2024.</p>
      </Footer>
    </Container>
  );
};

export default HomePage;

// Styled-components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Lato', sans-serif;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const Section = styled.div`
  max-width: 900px;
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #2e7d32;
  margin-bottom: 20px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  color: #2e7d32;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  color: #333;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: disc;
    margin-left: 40px;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    color: #2e7d32;
  }
`;


const FeaturesList = styled.ul`
  list-style-type: disc;
  margin-left: 40px;
  text-align: left;
  li {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const NavButton = styled.button`
  background-color: #f57f17;
  color: white;
  padding: 15px 30px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e65100;
  }

  span {
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 16px;
  color: #888;
`;
const ProblemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  gap: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  font-size: 18px;
  color: #333;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }

  strong {
    color: #2e7d32;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 600px; /* Ensure the image doesn't get too large */
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;


const SolutionContainer = styled.div`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  text-align: left;

  ul {
    list-style-type: disc;
    margin-left: 40px;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    color: #2e7d32;
  }
`;


const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    border-radius: 10px;
    border: none;
  }
`;
