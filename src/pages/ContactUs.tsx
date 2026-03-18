import SEO from '../components/SEO';
import { useLanguage } from '../utils/LanguageContext';
import '../styles/ContactUs.scss';

const ContactUs = () => {
  const { language } = useLanguage();

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/contactenos`;
  const ogImage = `${baseUrl}/favicon.png`;

  const title =
    language === 'es'
      ? 'Contacto principal - SAX Bolivia'
      : language === 'en'
      ? 'Main Contact - SAX Bolivia'
      : 'Contact principal - SAX Bolivia';

  const description =
    language === 'es'
      ? 'Información de contacto principal de SAX Bolivia: teléfono y correo comercial.'
      : language === 'en'
      ? 'Main contact information for SAX Bolivia: phone and business email.'
      : 'Informations de contact principales de SAX Bolivia : téléphone et e-mail commercial.';

  return (
    <div className="contact-us contact-us-basic">
      <SEO
        title={title}
        description={description}
        keywords="contacto SAX Bolivia, telefono SAX Bolivia, correo comercial SAX Bolivia"
        ogImage={ogImage}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />
      <div className="contact-container contact-container-basic">
        <h1 className="contact-title-basic">{title}</h1>
        <p className="contact-description-basic">{description}</p>
        <div className="contact-info-basic">
          <p>Teléfono: +519 78646205</p>
          <p>Correo: comercial@sax.com.bo</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
