import React from 'react';
import { useParams, Link } from 'react-router-dom';
import placesData from './places.json';
import styled from 'styled-components'; // Importation de styled-components
import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

// Définition des composants stylisés
const PlaceDetailsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border_color || '#ccc'}; // Couleur de la bordure
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  color: ${({ theme }) => theme.text_primary};
  
`;
const Cardparagrapg = styled.p`
  font-size: 15px;
  margin-bottom: 8px;
`;

const PlaceImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-left:20px;
  border-radius: 4px;
  margin-bottom: ${props => props.isFirst ? '20px' : '0'}; // Ajout de la marge basse conditionnelle
`;

const PlaceDetailsContent = styled.div`
  /* Ajoutez d'autres styles si nécessaire */
`;

const Horaire = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const Tarif = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const Details = () => {
  const { id } = useParams();
  const place = placesData.find(p => p.id === parseInt(id, 10));

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginTop: '20px', 
          padding: '10px 20px', 
          borderRadius: '20px', 
          color: 'blue', 
          border: 'none', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s',
          backgroundColor:'gris'
        }}>
          <FaArrowLeft style={{fontSize:'15px' }} />
        </button>
      </Link>

    <PlaceDetailsContainer>
      <PlaceImage src={place.image} alt={place.nom} />
      <PlaceImage src={place.image2} alt={place.nom} />
      <PlaceDetailsContent>
        <h2>{place.nom}</h2>
        <Cardparagrapg>
              <FaMapMarkerAlt style={{ color: 'red' }} />
              {place.lieu}
        </Cardparagrapg>
        <p> {place.description}</p>
        <h4>Type :{place.type}</h4>
    
      </PlaceDetailsContent>
    </PlaceDetailsContainer>
    </>
  );
};

export default Details;
