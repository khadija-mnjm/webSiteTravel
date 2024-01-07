import React from 'react';
import styled ,{ keyframes } from 'styled-components';
import placesData from './places.json';
 import { FaHeart } from 'react-icons/fa';
const PlaceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width:50%;
  paiding :20px;
  color: ${({ theme }) => theme.text_primary};
`;

const PlaceCard = styled.div`
  border: 1px solid ${({ theme }) => theme.border_color || '#ccc'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 10px;
`;

const PlaceImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const PlaceName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const bounce = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`;

const FavouritesHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  margin-left:40px;
  font-size:20px;
  `;

const HeaderText = styled.h3`
  margin-right: 10px;
  animation: ${bounce} 1s infinite;
`;

const LikeIcon = styled(FaHeart)`
  color: red;
  animation: ${bounce} 1s infinite;
`;

const PlaceCardComponent = () => {
  const places = placesData.slice(0, 2); // Prendre les deux premières places pour l'exemple

  return (
    <>
    <FavouritesHeaderContainer>
      <HeaderText>My Favorites places :</HeaderText>
      <LikeIcon />
    </FavouritesHeaderContainer>
    <PlaceCardContainer>
      
      {places.map((place, index) => (
        <PlaceCard key={index}>
          <PlaceImage src={place.image} alt={place.nom} />
          <PlaceName>{place.nom}</PlaceName>
        </PlaceCard>
      ))}
    </PlaceCardContainer>
    </>
  );
};

export default PlaceCardComponent;
