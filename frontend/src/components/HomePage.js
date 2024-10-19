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
      <Title>Refrigerator Ramsay</Title>
      
      {/* Project Description */}
      <Description>
        <p>
          Welcome to <strong>Refrigerator Ramsay</strong>, the smart kitchen assistant designed to help you make the most of your groceries and reduce food waste.
        </p>
        <p>
          Ever wondered what you could cook with the leftover ingredients sitting in your fridge? Or how to prevent food from going bad before you get a chance to use it? <strong>Refrigerator Ramsay</strong> is here to help! 
        </p>
        <p>
          Our AI-powered solution allows you to scan your groceries, get recipe suggestions based on the ingredients you have, and even generate a step-by-step guide on how to prepare delicious meals. You can also use the call feature to interact with our AI chatbot to get personalized recipe advice and ask any cooking-related questions.
        </p>
        <p>
          Simply capture an image of the items in your fridge, describe how you'd like to prepare them, and let <strong>Refrigerator Ramsay</strong> do the rest. It's time to take your cooking skills to the next level and reduce food waste at the same time!
        </p>
      </Description>

      {/* Navigation Buttons */}
      <BottomNav>
        <NavButton onClick={handleCamera}>
          <span>Use Camera</span>
        </NavButton>
        <NavButton onClick={handleCall}>
          <span>Call AI Chef</span>
        </NavButton>
      </BottomNav>
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
  height: 100vh;
  font-family: 'Lato', sans-serif;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #2e7d32;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }

  strong {
    color: #2e7d32;
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
