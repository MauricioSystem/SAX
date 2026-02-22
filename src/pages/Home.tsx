import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import imglista1 from '../assets/imglista1.png';
import imglista2 from '../assets/imglista2.png';
import imglista3 from '../assets/imglista3.png';
import imglista4 from '../assets/imglista4.png';
import imglista5 from '../assets/imglista5.png';
import '../styles/Home.scss';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();
  
  const images = [
    imglista1,
    imglista2,
    imglista3,
    imglista4,
    imglista5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="home">
      <div className="image-gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-slide ${index === currentImageIndex ? 'active' : ''} ${index === 2 ? 'img-lista3' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <button 
          className="gallery-nav gallery-nav-prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          className="gallery-nav gallery-nav-next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="home-content">
        <div className="description-section">
          <p className="description-text">{t.home.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
