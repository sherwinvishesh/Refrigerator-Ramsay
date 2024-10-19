import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Page3 = () => {
  const webcamRef = useRef(null); // Reference for the webcam
  const [imageSrc, setImageSrc] = useState(null); // For captured image
  const navigate = useNavigate();

  // Capture image using the webcam
  const captureImage = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot(); // Capture screenshot from webcam
      setImageSrc(capturedImage);
    }
  };

  // Navigate directly to description page without capturing or uploading an image
  const handleManualEntry = () => {
    navigate('/entry-description', { state: { imageSrc: null } }); // Pass null as the imageSrc
  };

  const handleNext = () => {
    if (imageSrc) {
      // Pass the captured image to the next page
      navigate('/entry-description', { state: { imageSrc } });
    }
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </BackButton>

      {/* Webcam capture or already captured image */}
      {!imageSrc ? (
        <>
          <WebcamContainer>
            <StyledWebcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <CaptureButton onClick={captureImage} />
          </WebcamContainer>
        </>
      ) : (
        <>
          <CapturedImage src={imageSrc} alt="Captured" />
          <InstructionText>Image ready. Click next to proceed.</InstructionText>
        </>
      )}

      {/* Button to enter manually without capturing an image */}
      <ManualEntryButton onClick={handleManualEntry}>Or enter manually</ManualEntryButton>

      {/* Next button for proceeding with the captured image */}    </Container>
  );
};

export default Page3;

// Styled-components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  padding: 20px;
`;

const BackButton = styled.div`
  align-self: flex-start;
  margin-bottom: 10px;
  cursor: pointer;
`;

const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4/3;
  border: 2px solid #2e7d32;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledWebcam = styled(Webcam)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CaptureButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #4caf50;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

const CapturedImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  border: 2px solid #2e7d32;
  border-radius: 10px;
`;

const InstructionText = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 20px;
`;

const ManualEntryButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NextButton = styled.button`
  background-color: #f57f17;
  color: white;
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:disabled {
    background-color: #f57f17;
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #e65100;
  }
`;

