import SEO from '../components/SEO';
import { useLanguage } from '../utils/LanguageContext';
import trabajoImg from '../assets/trabajo.png';
import '../styles/ContactUs.scss';

const copy = {
  es: {
    seoTitle: 'Abogados - SAX Bolivia',
    seoDesc: 'Sección en mantenimiento.',
    title: 'Página en mantenimiento',
    subtitle: 'Estamos mejorando esta sección. Vuelve pronto.',
    imgAlt: 'ATENCIÓN: Hombres trabajando',
  },
  en: {
    seoTitle: 'Lawyers - SAX Bolivia',
    seoDesc: 'Section under maintenance.',
    title: 'Page under maintenance',
    subtitle: "We're improving this section. Please check back soon.",
    imgAlt: 'Work in progress',
  },
  fr: {
    seoTitle: 'Avocats - SAX Bolivia',
    seoDesc: 'Section en maintenance.',
    title: 'Page en maintenance',
    subtitle: 'Nous améliorons cette section. Revenez bientôt.',
    imgAlt: 'Travaux en cours',
  },
} as const;

const ContactUs = () => {
  const { language } = useLanguage();
  const lang = language === 'es' || language === 'en' || language === 'fr' ? language : 'es';
  const t = copy[lang];

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/contactenos`;

  return (
    <div className="maintenance-page">
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        keywords="SAX Bolivia, mantenimiento"
        ogImage={`${baseUrl}/favicon.png`}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />

      <div className="maintenance-sign" role="status" aria-live="polite">
        <img
          className="maintenance-sign__img"
          src={trabajoImg}
          alt={t.imgAlt}
          loading="lazy"
          decoding="async"
        />
        <h1 className="maintenance-sign__title">{t.title}</h1>
        <p className="maintenance-sign__subtitle">{t.subtitle}</p>
      </div>
    </div>
  );
};

export default ContactUs;
