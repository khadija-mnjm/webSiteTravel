import React, { useState } from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import styled from 'styled-components';

const Cadre = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

function Plan() {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  // Handle the generation of the image
  const generateImage = async () => {
    try {
      // TODO: Implement the OpenAI API call here using the prompt
      // For demonstration purposes, simulate an error
      throw new Error("Sorry, AI is not working right now. Please try again later.");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <Cadre>
      <Title>
        <AiOutlineRobot /> Generate an image
      </Title>
      <CustomTextarea
        placeholder="let's generate image ..."
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <br />
      <CustomButton onClick={generateImage}>
        Generate an image
      </CustomButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Cadre>
  );
}

export default Plan;
