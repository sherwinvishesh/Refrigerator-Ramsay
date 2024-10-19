import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // To allow raw HTML in Markdown

const ChefChat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if groceries and recipe are passed in state
  let groceries = location.state?.groceries || 'No groceries identified';
  const recipe = location.state?.recipe || 'No recipe generated';

  // Ensure groceries are formatted as a string (Markdown-compatible)
  if (Array.isArray(groceries)) {
    groceries = groceries.map(item => `* ${item}`).join('\n');
  }

  return (
    <Container>
      <Header>
        <h1>Recipe Suggestions</h1>
        <p>Here are the groceries identified and a recipe based on them:</p>
      </Header>

      <Groceries>
        <h2>Identified Groceries:</h2>
        {/* Render the groceries in Markdown */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {groceries}
        </ReactMarkdown>
      </Groceries>

      <Recipe>
        <h2>Generated Recipe:</h2>
        {/* Render the recipe in Markdown */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {recipe}
        </ReactMarkdown>
      </Recipe>

      <HomeButton onClick={() => navigate('/')}>Go Back Home</HomeButton>
    </Container>
  );
};

export default ChefChat;

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
`;

const Header = styled.div`
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #2e7d32;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const Groceries = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;

  h1, h2, h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #2e7d32;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #333;
  }

  ul, ol {
    margin-left: 20px;
    list-style-position: inside;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
  }
`;

const Recipe = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;

  h1, h2, h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #2e7d32;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #333;
  }

  ul, ol {
    margin-left: 20px;
    list-style-position: inside;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
  }
`;

const HomeButton = styled.button`
  background-color: #2e7d32;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #1b5e20;
  }
`;

