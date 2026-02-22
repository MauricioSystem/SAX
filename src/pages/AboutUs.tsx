import { useLanguage } from '../utils/LanguageContext';
import nuestraEmpresa from '../assets/nuestra empresa.png';
import cobre from '../assets/cobre.png';
import importacion from '../assets/importacion.png';
import compu from '../assets/compu.png';
import '../styles/AboutUs.scss';

const AboutUs = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      title: t.aboutUs.card1.title,
      text: t.aboutUs.card1.text,
      image: nuestraEmpresa,
    },
    {
      id: 2,
      title: t.aboutUs.card2.title,
      text: t.aboutUs.card2.text,
      image: cobre,
    },
    {
      id: 3,
      title: t.aboutUs.card3.title,
      text: t.aboutUs.card3.text,
      image: importacion,
    },
    {
      id: 4,
      title: t.aboutUs.card4.title,
      text: t.aboutUs.card4.text,
      image: compu,
    },
  ];

  return (
    <div className="about-us">
      <div className="about-us-container">
        {cards.map((card, index) => (
          <div key={card.id} className={`about-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className={`card-image ${index === 2 ? 'importacion-image' : ''}`}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
