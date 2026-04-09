import SEO from '../components/SEO';
import { useLanguage } from '../utils/LanguageContext';
import { ExternalLink, MessageCircle } from 'lucide-react';
import '../styles/LegalPage.scss';

const WHATSAPP_E164 = '59177010483';

const AbogadosPage = () => {
  const { t } = useLanguage();
  const lp = t.legalPage;

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/legal-information`;
  const waHref = `https://wa.me/${WHATSAPP_E164}`;

  return (
    <div className="legal-page">
      <SEO
        title={lp.seoTitle}
        description={lp.seoDescription}
        keywords="SAX Bolivia, abogados, INRA, derecho agrario, conciliación, arbitraje, Bolivia"
        ogImage={`${baseUrl}/favicon.png`}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />

      <header className="legal-hero">
        <div className="legal-hero__inner">
          <p className="legal-hero__eyebrow">{lp.heroEyebrow}</p>
          <h1 className="legal-hero__title">{lp.heroTitle}</h1>
          <p className="legal-hero__subtitle">{lp.heroSubtitle}</p>

          <div className="legal-hero__contact">
            <p className="legal-hero__contact-intro">{lp.contactIntro}</p>
            <p className="legal-hero__contact-name">{lp.contactName}</p>
            <p className="legal-hero__contact-role">{lp.contactRole}</p>
            <div className="legal-hero__actions">
              <a
                className="legal-hero__cta"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} className="legal-hero__cta-icon" aria-hidden />
                {lp.ctaWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="legal-strip" aria-hidden="true" />

      <div className="legal-container">
        <section className="legal-section">
          <h2 className="legal__h2">{lp.sectionAgroTitle}</h2>
          <p className="legal__lead">{lp.agroLead}</p>

          <h3 className="legal__h3">{lp.inraTitle}</h3>
          <ul className="legal__list legal__list--spaced">
            {lp.inraBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="legal__h3">{lp.tribunalTitle}</h3>
          <ul className="legal__list legal__list--spaced">
            {lp.tribunalBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="legal__h3">{lp.consultoriaTitle}</h3>
          <ul className="legal__list legal__list--spaced">
            {lp.consultoriaBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section legal-section--regulatory">
          <h2 className="legal__h2">{lp.regulatoryTitle}</h2>
          <p className="legal__lead">{lp.regulatoryIntro}</p>
          <ul className="legal__link-list">
            {lp.regulatoryLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal__external-link"
                >
                  <span>{item.label}</span>
                  <ExternalLink size={16} className="legal__external-icon" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal__h2">{lp.sectionCivilTitle}</h2>
          <p className="legal__lead">{lp.civilLead}</p>

          <h3 className="legal__h3">{lp.civilTitle}</h3>
          <ul className="legal__list legal__list--spaced">
            {lp.civilBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="legal__h3">{lp.empresarialTitle}</h3>
          <ul className="legal__list legal__list--spaced">
            {lp.empresarialBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="legal__closing">{lp.empresarialClosing}</p>
        </section>

        <section className="legal-section">
          <h2 className="legal__h2">{lp.arbitrajeTitle}</h2>
          <ul className="legal__list">
            {lp.arbitrajeBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AbogadosPage;
