import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import placesData from './places.json';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from 'react-icons/fa';

// Styles pour la barre de défilement personnalisée
const CustomScrollbar = styled.div`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bg};/* Utilisation du thème pour la couleur d'arrière-plan */
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bg}; /* Utilisation du thème pour la couleur principale */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.bg}; /* Utilisation du thème pour la couleur secondaire au survol */
  }

  /* Ajout d'une couleur d'arrière-plan personnalisée pour le conteneur de la barre de défilement */
  background-color: ${({ theme }) => theme.bg};
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  position: relative;
  overflow-y: auto;
  max-height: 500px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre */
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 16px);
  width: 200px;
  height: 300px;
  color: ${({ theme }) => theme.text_primary};
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  position: relative;
  background-color: ${({ theme }) => theme.bg};

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  & + & {
    margin-top: 16px;
  }
`;


const AddButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent; // Arrière-plan transparent
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  transition: color 0.3s ease; // Transition de la couleur de l'icône

  &:hover {
    color: #0056b3; // Couleur de l'icône au survol
  }

  svg { // Styles pour l'icône
    font-size: 24px; // Taille de l'icône
  }
`;
// Styles pour l'image de la carte
const CardImage = styled.img`
  width: 100%;
  height: 150px; /* Hauteur de l'image */
  object-fit: cover; /* Redimensionne l'image pour qu'elle couvre toute la zone définie */
  border-radius: 6px; /* Coins arrondis */
`;



// Styles pour le titre de la carte
const CardTitle = styled.h3`
  font-size: 18px;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
`;

// Styles pour le paragraphe de la carte
const CardParagraph = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
`;

// Styles pour le compteur de favoris
const FavoritesCount = styled.div`
  margin-top: 20px;
  margin-left:20px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;
const Dashboard = () => {
  const navigate = useNavigate();
  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [addedPlaces, setAddedPlaces] = useState({});
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [placesState, setPlacesState] = useState({});
  const [iconColor, setIconColor] = useState('white');

  const goToFavorites = () => {
    navigate('/favourites', { state: { favorites: cart } });
  };

  return (
    
      <CustomScrollbar>
      <FavoritesCount>
        Number of favorites: {cart.length}
      </FavoritesCount>
        <CardContainer>
        
          {placesData.map((place, index) => (
            <Card
              key={index}
              ref={index === 0 ? firstCardRef : index === placesData.length - 1 ? lastCardRef : null}
              onClick={() => navigate(`/dashboard/details/${place.id}`)}
            >
              <AddButton 
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Clicked on:", place.id);
                  setCart(prevCart => {
                    const updatedCart = [...prevCart, place];
                    return updatedCart;
                  });
                  setFavoritePlaces(prevPlaces => {
                    if (prevPlaces.includes(place.id)) {
                      return prevPlaces.filter(id => id !== place.id);
                    } else {
                      return [...prevPlaces, place.id];
                    }
                  });
                  setPlacesState(prevState => ({
                    ...prevState,
                    [place.id]: prevState[place.id] === 'white' ? 'red' : 'white'
                  }));
                }}
                style={{ color: addedPlaces[place.id] ? 'red' : 'white' }}
              >
                <FaHeart style={{ color: placesState[place.id] || 'white' }} />
              </AddButton>
              <CardImage src={place.image} alt={place.nom} />
              <CardTitle>{place.nom}</CardTitle>
              <CardParagraph>
                <FaMapMarkerAlt style={{ color: 'red' }} />
                {place.lieu}
              </CardParagraph>
            </Card>
          ))}
        </CardContainer>
      </CustomScrollbar>
      
  );
};

export default Dashboard;