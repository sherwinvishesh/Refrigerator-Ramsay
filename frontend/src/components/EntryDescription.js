import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const EntryDescription = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(''); // For image preview
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  // Handle drag-and-drop or manual file upload
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(file); // Store the uploaded image file
      setImagePreview(event.target.result); // Set image preview
    };
    reader.readAsDataURL(file);
  };

  // Initialize react-dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    if (!description) {
      alert("Please enter a description.");
      return;
    }

    // Start loading
    setLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append('image_file', image); // Upload the image
    formData.append('description', description);
    formData.append('language', 'en'); // Optional language field

    try {
      const response = await fetch('http://127.0.0.1:8000/analyze_image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log("Received response from backend:", data); // Debugging log

      // Stop loading and navigate to the next page with the response data
      setLoading(false);
      navigate('/chef-chat', { state: { groceries: data.groceries, recipe: data.recipe } });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false); // Stop loading in case of error
    }
  };

  return (
    <Container>
      <Title>Upload an image of groceries and describe how you want to prepare them</Title>
      <Form onSubmit={handleSubmit}>
        
        {/* Drag and Drop or click to upload */}
        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here...</p>
          ) : imagePreview ? (
            <>
              <img src={imagePreview} alt="Uploaded preview" style={{ width: '100%', maxWidth: '300px' }} />
              <p>{image.name}</p>
            </>
          ) : (
            <p>Drag 'n' drop an image here, or click to select one</p>
          )}
        </DropzoneContainer>
        
        <TextBox
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe how you'd like to prepare the ingredients"
        />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Generating Recipe...' : 'Generate Recipe'}
        </SubmitButton>

        {/* Show loading GIF when loading */}
        {loading && <LoadingGif src="/green-loading.gif" alt="Loading..." />} {/* Reference the loading gif */}
      </Form>
    </Container>
  );
};

export default EntryDescription;

// Styled-components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2e7d32;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const DropzoneContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  border: 2px dashed #2e7d32;
  border-radius: 10px;
  background-color: #f4f4f4;
  cursor: pointer;

  p {
    margin: 0;
    color: ${props => (props.isDragActive ? '#2e7d32' : '#333')};
  }

  img {
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #f57f17;
  color: white;
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e65100;
  }

  &:disabled {
    background-color: #f57f17;
    opacity: 0.7;
  }
`;

const LoadingGif = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

