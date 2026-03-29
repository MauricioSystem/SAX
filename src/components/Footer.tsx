import { useLanguage } from '../utils/LanguageContext';
import whatsappIcon from '../assets/whatsapp.png';
import facebookIcon from '../assets/facebook.png';
import '../styles/Footer.scss';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t.footer.contactenos}</h3>
            <div className="footer-info">
              <p>{t.footer.address}</p>
              <p>{t.footer.location}</p>
              <p>
                <a href="mailto:csandoval@sax.com.bo" className="footer-email">
                  {t.footer.email}
                </a>
              </p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.director}</p>
              <div className="footer-separator" aria-hidden="true" />
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://wa.me/59178646205"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/SaxBolivia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
