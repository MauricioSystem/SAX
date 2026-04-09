import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/SEO';
import { ExternalLink } from 'lucide-react';
import '../styles/AboutUs.scss';

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((block, i) => (
        <p key={i} className="information__paragraph">
          {block}
        </p>
      ))}
    </>
  );
}

const AboutUs = () => {
  const { t, language } = useLanguage();
  const a = t.aboutUs;

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/information`;

  return (
    <div className="information-page">
      <SEO
        title={a.seoTitle}
        description={a.seoDescription}
        keywords="SAX Bolivia, señalización vial, INRA, Normas Bolivianas, consultoría legal, Bolivia"
        ogImage={`${baseUrl}/favicon.png`}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />

      <header className="information-hero">
        <div className="information-hero__inner">
          <p className="information-hero__eyebrow">
            {language === 'es' ? 'Información corporativa' : language === 'en' ? 'Corporate information' : 'Information corporate'}
          </p>
          <h1 className="information-hero__title">{a.heroTitle}</h1>
          <p className="information-hero__subtitle">{a.heroSubtitle}</p>
        </div>
      </header>

      <div className="information-strip" aria-hidden="true" />

      <div className="information-container">
        <section className="information-section">
          <Paragraphs text={a.intro} />
          <p className="information__lead">{a.lead}</p>
        </section>

        <section className="information-section">
          <h2 className="information__h2">{a.sectionSignageTitle}</h2>
          <p className="information__paragraph">{a.sectionSignageIntro}</p>
          <ul className="information__list">
            <li>{a.bulletEffexport}</li>
            <li>{a.bulletTrafficDevices}</li>
            <li>{a.bulletWritesys}</li>
          </ul>
        </section>

        <section className="information-section">
          <h2 className="information__h2">{a.sectionLegalTitle}</h2>
          <p className="information__paragraph">{a.sectionLegalIntro}</p>
          <ul className="information__list information__list--legal">
            <li>{a.legalAgro}</li>
            <li>{a.legalCivil}</li>
            <li>{a.legalAgrarian}</li>
          </ul>
        </section>

        <section className="information-section information-section--regulatory">
          <h2 className="information__h2">{a.sectionRegulatoryTitle}</h2>
          <p className="information__paragraph">{a.sectionRegulatoryIntro}</p>
          <ul className="information__link-list">
            {a.regulatoryLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="information__external-link"
                >
                  <span>{item.label}</span>
                  <ExternalLink size={16} className="information__external-icon" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
