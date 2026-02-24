import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/SEO';
import nuestraEmpresa from '../assets/nuestra empresa.png';
import cobre from '../assets/cobre.png';
import importacion from '../assets/importacion.png';
import compu from '../assets/compu.png';
import '../styles/AboutUs.scss';

const AboutUs = () => {
  const { t, language } = useLanguage();

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

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/quienes-somos`;
  const ogImage = `${baseUrl}/favicon.png`;

  return (
    <div className="about-us">
      <SEO
        title={language === 'es'
          ? 'Quiénes Somos - SAX Bolivia'
          : language === 'en'
          ? 'About Us - SAX Bolivia'
          : 'À Propos - SAX Bolivia'}
        description={language === 'es'
          ? 'Conoce más sobre SAX Bolivia, nuestra empresa, experiencia en cobre, importaciones y tecnología.'
          : language === 'en'
          ? 'Learn more about SAX Bolivia, our company, copper experience, imports and technology.'
          : 'En savoir plus sur SAX Bolivia, notre entreprise, notre expérience en cuivre, nos importations et notre technologie.'}
        keywords="SAX Bolivia, empresa, cobre, importaciones, tecnología, Bolivia"
        ogImage={ogImage}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />
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
