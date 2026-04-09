import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/SEO';
import { productImages } from '../utils/productImages';
import imglista1 from '../assets/imglista1.png';
import imglista2 from '../assets/imglista2.png';
import imglista3 from '../assets/imglista3.png';
import imglista4 from '../assets/imglista4.png';
import imglista5 from '../assets/imglista5.png';
import '../styles/Home.scss';

const BG_IMAGES = [imglista1, imglista2, imglista3, imglista4, imglista5];

/** Imágenes para las 3 tarjetas inferiores (orden fijo). */
const INSIGHT_IMAGES = [imglista2, imglista3, imglista4];

const ROUTES = {
  information: '/information',
  products: '/products',
  legal: '/legal-information',
} as const;

const Home = () => {
  const { t } = useLanguage();
  const h = t.home;

  const [bgIndex, setBgIndex] = useState(0);

  const products = useMemo(() => t.products.items, [t.products.items]);

  const carouselProducts = useMemo(
    () => products.filter((p) => Boolean(productImages[p.id]?.[0])),
    [products],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const baseUrl = 'https://sax.com.bo';

  const renderProductCard = (product: (typeof products)[number], suffix: string) => {
    const src = productImages[product.id]?.[0];
    if (!src) return null;
    return (
      <Link
        key={`${product.id}-${suffix}`}
        to={ROUTES.products}
        className="home-carousel__card"
      >
        <div className="home-carousel__card-media">
          <img src={src} alt="" className="home-carousel__img" />
        </div>
        <div className="home-carousel__card-body">
          <h3 className="home-carousel__card-name">{product.name}</h3>
          <p className="home-carousel__card-meta">{product.category}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="home">
      <SEO
        title={h.seoTitle}
        description={h.seoDescription}
        keywords="SAX Bolivia, señalización vial, productos viales, INRA, Normas Bolivianas, Bolivia"
        ogImage={`${baseUrl}/favicon.png`}
        ogUrl={baseUrl}
        canonicalUrl={baseUrl}
      />

      <div className="home__bg" aria-hidden="true">
        {BG_IMAGES.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className={`home__bg-slide ${i === bgIndex ? 'home__bg-slide--active' : ''} ${i === 2 ? 'home__bg-slide--lista3' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="home__scrim" aria-hidden="true" />

      <div className="home__main">
        <section className="home-hero">
          <div className="home-hero__inner">
            <p className="home-hero__eyebrow">{h.heroEyebrow}</p>
            <h1 className="home-hero__title">{h.heroTitle}</h1>
            <p className="home-hero__subtitle">{h.heroSubtitle}</p>
            <div className="home-hero__actions">
              <Link to={ROUTES.information} className="home-hero__btn home-hero__btn--primary">
                {h.heroCtaInformation}
              </Link>
              <Link to={ROUTES.products} className="home-hero__btn home-hero__btn--outline">
                {h.heroCtaProducts}
              </Link>
              <Link to={ROUTES.legal} className="home-hero__btn home-hero__btn--ghost">
                {h.heroCtaLegal}
              </Link>
            </div>
          </div>
        </section>

        <section className="home-carousel-section" aria-labelledby="home-carousel-heading">
          <div className="home-carousel-section__inner">
            <h2 id="home-carousel-heading" className="home-carousel-section__title">
              {h.carouselTitle}
            </h2>
            <p className="home-carousel-section__subtitle">{h.carouselSubtitle}</p>

            <div className="home-carousel" role="region" aria-label={h.carouselRegionLabel}>
              <div className="home-carousel__viewport">
                <div className="home-carousel__marquee-track">
                  {carouselProducts.map((p) => renderProductCard(p, 'a'))}
                  {carouselProducts.map((p) => renderProductCard(p, 'b'))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-insights" aria-labelledby="home-insights-heading">
          <div className="home-insights__inner">
            <h2 id="home-insights-heading" className="home-insights__title">
              {h.insightsSectionTitle}
            </h2>
            <div className="home-insights__grid">
              {h.insightCards.map((card, index) => (
                <Link key={card.title} to={ROUTES[card.to]} className="home-insight">
                  <div
                    className={`home-insight__media ${index === 1 ? 'home-insight__media--lista3' : ''}`}
                  >
                    <img src={INSIGHT_IMAGES[index]} alt="" className="home-insight__img" />
                  </div>
                  <h3 className="home-insight__title">{card.title}</h3>
                  <p className="home-insight__body">{card.body}</p>
                  <span className="home-insight__link">
                    {card.cta}
                    <ChevronRight size={18} className="home-insight__link-icon" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
