import React, { useState } from 'react';
import jsonData from './places1.json';
import './styleHompages.css';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';

const CustomScrollbar = styled.div`
  overflow-y: auto;
  max-height: 500px;
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bg};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bg};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.bg};
  }

  background-color: ${({ theme }) => theme.bg};
`;
const ReturnButton = styled.button`
  position: fixed;
  top: 80px;
  left:20%;
  z-index: 1000;  // Assurez-vous que le bouton est au-dessus des autres éléments
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.bg}; // Fond semi-transparent
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  svg {  // Style pour l'icône
    margin-right: 8px;
  }
`;
const SearchWrapper = styled.div`
  align-items: center;
  max-width: 700px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  margin-left:20%;
  color: ${({ theme }) => theme.text_secondary};
`;

const SearchInput = styled.input`
  margin-left: 90px;
  border: none;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.bg};
  align-items: center;
`;

const CityList = ({ cities, onCityClick }) => (
  <ul className='ul'>
    {cities.map((city, index) => (
      <li className='li' key={index}>
        <a className='a' href="#" onClick={() => onCityClick(city)}>
          <img className='imgProfil' src={city.img1} alt={city.img1} style={{ maxWidth: '100%' }} />
          <div className="city-name">{city.nom}</div>
        </a>
      </li>
    ))}
  </ul>
);

const PlaceList = ({ places, onPlaceClick }) => (
  <ul className='ulPlace'>
    {places.map((place, index) => (
      <li className='liPlace' key={index}>
        <a className='aPlace' href="#" onClick={() => onPlaceClick(place)}>
          {place.nom}
        </a>
      </li>
    ))}
  </ul>
);

const CityDetails = ({ details, onPlaceClick }) => (
  <div>
    <h2 className='Titre'>{details.nom}</h2>
    <PlaceList places={details.lieux} onPlaceClick={onPlaceClick} />
  </div>
);

const Search = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const cities = jsonData?.villes || [];
  const dispatch = useDispatch();
  const handleReturnClick = () => {
    setSelectedPlace(null);
    window.location.href = '/'; // Redirige vers la route "/"
  };
  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSelectedPlace(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCities = cities.filter(city =>
    city.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setLikes(place.likes || 0);
    setComments(place.comments || []);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (inputValue.trim() !== '') {
      const updatedComments = [...comments, inputValue];
      setComments(updatedComments);
      setInputValue('');
    }
  };

  return (
    <CustomScrollbar>
       <ReturnButton className='btnRtn' onClick={handleReturnClick}>
            <ArrowBackIcon /> Retour
          </ReturnButton>
      <SearchWrapper>
        <SearchOutlinedIcon />
        <SearchInput
          type='text'
          placeholder='Search city ...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchWrapper>
      <div className='divA'>
        {filteredCities.length === 0 ? (
          <p> Aucun city trouvable</p>
        ) : (
          <CityList cities={filteredCities} onCityClick={handleCityClick} />
        )}
        {selectedCity && !selectedPlace && (
          <CityDetails details={selectedCity} onPlaceClick={handlePlaceClick} />
        )}
        {selectedPlace && (
          <div>
            <div className="instagram-post">
              <div className="image-container">
                <img src={selectedPlace.images} alt={selectedPlace.nom} style={{ maxWidth: '100%' }} className="first-image" />
                <img src={selectedPlace.images1} alt={selectedPlace.nom} style={{ maxWidth: '100%' }} className="second-image" />
              </div>
              <div className="post-details">
                <h3>{selectedPlace.nom}</h3>
                <p>{selectedPlace.description}</p>
                <p>Type: {selectedPlace.type}</p>
               
              </div>
            </div>
           
          </div>
        )}
      </div>
    </CustomScrollbar>
  );
};

export default Search;
