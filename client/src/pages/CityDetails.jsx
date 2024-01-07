const CityList = ({ cities, onCityClick }) => {
    if (!cities || !Array.isArray(cities) || cities.length === 0) {
      return <p>Aucune ville disponible pour le moment.</p>;
    }
  
    return (
      <ul className='ul'>
        {cities.map((city) => (
          <li key={city.id} className='li'>
            <a href="#" onClick={() => onCityClick(city)}>
              <img src={city.img1} alt={city.nom} style={{ maxWidth: '100%' }} className='imgProfil' />
              {city.nom}
            </a>
          </li>
        ))}
      </ul>
    );
  };
export default CityList;