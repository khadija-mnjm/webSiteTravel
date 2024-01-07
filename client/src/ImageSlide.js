// ImageSlider.js

import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ImageSlider = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.oMUWcLRSNrhxlj-slfEPiAHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.dbdca991edea2b51a6494513ff5f9291?rik=1GT8jkT0XeXkqw&pid=ImgRaw&r=0',
    'https://i.pinimg.com/564x/06/d3/3a/06d33a65de16ad1c806eaef6937b814c.jpg',
    'https://i.pinimg.com/564x/31/61/c1/3161c10c3b67d1080eac99bf050a3c5a.jpg',
    'https://i.pinimg.com/564x/d7/71/f3/d771f35bffb4592779e1c7e5e0d429ed.jpg'
  ];

  const images2 = [
    'https://i.pinimg.com/564x/80/41/3b/80413b7c65613d6f1f4f6b95fd66e5b5.jpg',
    'https://i.pinimg.com/564x/80/d3/37/80d3374f46aaa4568dad59998aa533b6.jpg',
    'https://th.bing.com/th/id/R.f814d1b1d5bb6cd6f6f82b1ba112837a?rik=1mWAsTZGuQuQeg&pid=ImgRaw&r=0',
    'https://media.istockphoto.com/id/1156796325/photo/aerial-view-of-blue-medina-of-city-chefchaouen-morocco-africa.webp?b=1&s=170667a&w=0&k=20&c=GA2aB-QnV2bSNiBYhZpPalmrwPnSHcRoZJKe5se2Hq8=',
    'https://th.bing.com/th/id/R.412957c1def4efd1a2123eae034df366?rik=pP4X2dCtkqlaUg&riu=http%3a%2f%2fe-sushi.fr%2fimagearticle%2f2015%2f05%2fcasablanca.jpg&ehk=FdQNU4sEOUNwrqOsacX5HRFVkl7B2kKKXj4MCz6ZnKs%3d&risl=&pid=ImgRaw&r=0'
  ];
  const images3 = [
    'https://images.pexels.com/photos/6587429/pexels-photo-6587429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://media.istockphoto.com/id/137891113/photo/interior-marble-courtyard-of-hamman-ii-mosque.jpg?s=612x612&w=0&k=20&c=wh_PJ-TJfb0loXxjLke0P0HPjQpC5su5koQp8edOXO4=',
    'https://media.istockphoto.com/id/478636132/photo/hassan-ii-mosque-during-the-sunset-in-casablanca-morocco.jpg?s=612x612&w=0&k=20&c=71CKjEAZAwaRQQaSF88JzhlveIKenN1EARNDtTXw31U=',
    'https://th.bing.com/th/id/OIP.OzJHE7rusNVAcO5bXB2USgHaFv?w=920&h=714&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.738812a54dd3c0aa305464858c710479?rik=LozsHquyrRFGdg&pid=ImgRaw&r=0'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 2000); // Change image every 5 seconds
    const interval3 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images3.length);
    }, 2000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [images, images2,images3]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
  };

  const goToNextImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };
  const goToPreviousImage3 = () => {
    setCurrentImageIndex3((prevIndex) => (prevIndex - 1 + images3.length) % images3.length);
  };

  const goToNextImage3 = () => {
    setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % images3.length);
  };

  return (
    <>
    
    <div className='cadr'>
      <div className="slider-container">
        <button className="slider-arrow slider-prev" onClick={goToPreviousImage}>
          <ArrowBackIosIcon />
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <button className="slider-arrow slider-next" onClick={goToNextImage}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      <div className="slider-container">
        <button className="slider-arrow slider-prev" onClick={goToPreviousImage2}>
          <ArrowBackIosIcon />
        </button>
        {images2.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slider-image ${index === currentImageIndex2 ? 'active' : ''}`}
          />
        ))}
        <button className="slider-arrow slider-next" onClick={goToNextImage2}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      <div className="slider-container">
        <button className="slider-arrow slider-prev" onClick={goToPreviousImage3}>
          <ArrowBackIosIcon />
        </button>
        {images3.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slider-image ${index === currentImageIndex3 ? 'active' : ''}`}
          />
        ))}
        <button className="slider-arrow slider-next" onClick={goToNextImage3}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      </div>

    </>
  );
};

export default ImageSlider;
