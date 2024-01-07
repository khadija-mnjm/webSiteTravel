import React, { useState } from "react";
import App from "./App";
import "./Page.css"; 
import ImageSlider from "./ImageSlide";
import Logo from './Images/Logo.png'
import image3 from './Images/image3.png'
import styled, { keyframes } from 'styled-components';
export default function Hi() {
  const [showApp, setShowApp] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setShowApp(true);
  };
  const slideLeftAndRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const blinkAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const BlinkingSpan = styled.span`
  animation: ${blinkAnimation} 1s infinite alternate;
  font-size: 40px; // Augmentation de la taille de la police à 40px
  color: blue;
`;


const Image = styled.img`
  max-width: 1100px;
  height:auto; // Taille maximale de l'image
  margin-left: 20px; // Espace à gauche de l'image
`;
// Styles
const MenuContainer = styled.div`
  display: flex;
  margin-left:15%;
  align-items: center;
  background-image: url('/Images/image3.jpg'); // Remplacez par le chemin correct
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;
const Title = styled.h3`
  flex: 1;
`;

  
  return (
    <>
    <div className="container1">
      {!showApp ? (
        <>
        
          <div className="navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <button onClick={handleButtonClick} className="nav-button">
              Next
            </button>
          </div>
          <div className="body">
          <MenuContainer>
              <Title>
                <BlinkingSpan>Travel Morocco </BlinkingSpan><br/>
                is your ultimate travel companion <br/>
                to discover Morocco's hidden treasures.<br/>
                 Explore, plan and save your favorite places <br/>
                 for an unforgettable travel experience.
              </Title>
              <Image src={image3} alt="Description de l'image" />
            </MenuContainer>
          </div>
          <ImageSlider/>
          <footer className="app-footer">
            <p>@2024<br/>
            Applications Travel for every body </p>
          </footer>
          
        </>
      ) : (
        <App />
      )}
      </div>
    </>
  );
}
