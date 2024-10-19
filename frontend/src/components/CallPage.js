import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CallPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>

      {/* Embed the external website in an iframe */}
      <IframeContainer>
        <Iframe
          src="https://refrigerator-ramsay-evi.vercel.app/"
          title="External Call Page"
          frameBorder="0"
          allow="camera; microphone"  // Allow camera and microphone access for the embedded page
        />
      </IframeContainer>
    </Container>
  );
};

export default CallPage;

// Styled-components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BackButton = styled.button`
  background-color: #f57f17;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e65100;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

