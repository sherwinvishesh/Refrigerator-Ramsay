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
        <Logo src="/logo-refrigerator-ramsay.png" alt="Refrigerator Ramsay Logo" />
      </LogoContainer>

      {/* Project Introduction */}
      <Section>
        <Title>Welcome to Refrigerator Ramsay</Title>
        <Description>
          <p>
            <strong>Refrigerator Ramsay</strong> is your smart kitchen assistant, designed to help you make the most of your groceries while reducing food waste. Whether you're unsure what to cook with what's left in your fridge or looking to extend the freshness of your ingredients, <strong>Refrigerator Ramsay</strong> has you covered!
          </p>
        </Description>
      </Section>

      {/* Problem Being Solved */}
      <Section>
        <SubTitle>The Problem</SubTitle>
        <Description>
          <p>
            Millions of tons of food are wasted every year because people either forget about ingredients in their refrigerators or don't know how to make use of them before they go bad. This not only leads to financial loss but also has a massive environmental impact. Our goal is to solve this problem by turning leftovers into delicious meals and minimizing food waste.
          </p>
        </Description>
      </Section>

      {/* Features */}
      <Section>
        <SubTitle>Key Features</SubTitle>
        <FeaturesList>
          <li>AI-powered grocery recognition: Scan your fridge and our AI will identify the ingredients.</li>
          <li>Recipe suggestions: Get creative, easy-to-make recipes based on what's in your fridge.</li>
          <li>AI Chef Call: Interact with an AI chef for personalized cooking advice and tips.</li>
          <li>Reduce food waste: Use up all your ingredients and minimize food waste.</li>
          <li>Easy-to-use interface: Designed for everyone, from beginners to seasoned cooks.</li>
        </FeaturesList>
      </Section>

      {/* How It Works */}
      <Section>
        <SubTitle>How It Works</SubTitle>
        <Description>
          <ul>
            <li><strong>Step 1:</strong> Use the camera to scan your fridge or pantry.</li>
            <li><strong>Step 2:</strong> Our AI will recognize the ingredients you have available.</li>
            <li><strong>Step 3:</strong> Describe how you'd like to prepare the meal, and <strong>Refrigerator Ramsay</strong> will generate a recipe based on your ingredients and preferences.</li>
            <li><strong>Step 4:</strong> Follow the step-by-step instructions to cook a delicious meal and reduce food waste in the process.</li>
            <li><strong>Optional:</strong> If you need personalized cooking advice, use the call feature to chat with our AI chef!</li>
          </ul>
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

