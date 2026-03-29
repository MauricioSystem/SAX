import { useState, useMemo } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/SEO';
import CategoryFilter from '../components/ui/CategoryFilter';
import SearchInput from '../components/ui/SearchInput';
import ProductModal from '../components/ProductModal';
// Import product images
import barrera1 from '../assets/barrera1.png';
import caneca1 from '../assets/caneca1.png';
import cono1 from '../assets/cono1.png';
import cono2 from '../assets/cono2.png';
import cono3 from '../assets/cono3.png';
import hito1 from '../assets/hito1.png';
import hito2 from '../assets/hito2.png';
import hito3 from '../assets/hito3.png';
import estoperol1 from '../assets/estoperol1.png';
import estoperol2 from '../assets/estoperol2.png';
import estoperol3 from '../assets/estoperol3.png';
import estoperol4 from '../assets/estoperol4.png';
import resaltadodos1 from '../assets/resaltadodos1.png';
import resaltadodos2 from '../assets/resaltadodos2.png';
import resaltadodos3 from '../assets/resaltadodos3.png';
import resalto1 from '../assets/resalto1.png';
import resalto2 from '../assets/resalto2.png';
import resalto3 from '../assets/resalto3.png';
import tachon1 from '../assets/tachon1.png';
import tachon2 from '../assets/tachon2.png';
import tachon3 from '../assets/tachon3.png';
import tope1 from '../assets/tope1.png';
import tope2 from '../assets/tope2.png';
import tope3 from '../assets/tope3.png';
import '../styles/Products.scss';


const productImages: Record<number, string[]> = {
  1: [barrera1], 
  2: [caneca1], 
  3: [cono1, cono2, cono3],
  4: [hito1, hito2, hito3], 
  5: [estoperol1, estoperol2, estoperol3, estoperol4], 
  6: [resaltadodos1, resaltadodos2, resaltadodos3], 
  7: [resalto1, resalto2, resalto3], 
  8: [tachon1, tachon2, tachon3], 
  9: [tope1, tope2, tope3], 
};

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = t.products.items;

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleCardClick = (productId: number) => {
    setSelectedProduct(productId);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const selectedProductData = selectedProduct
    ? products.find((p) => p.id === selectedProduct)
    : null;

  const baseUrl = 'https://sax.com.bo';
  const pageUrl = `${baseUrl}/productos`;
  const ogImage = `${baseUrl}/favicon.png`;

  return (
    <div className="products-page">
      <SEO
        title={language === 'es'
          ? 'Productos Viales - SAX Bolivia'
          : language === 'en'
          ? 'Road Products - SAX Bolivia'
          : 'Produits Routiers - SAX Bolivia'}
        description={language === 'es'
          ? 'Catálogo completo de productos viales: conos de tráfico, barreras, resaltos, topes de estacionamiento y más. Calidad garantizada.'
          : language === 'en'
          ? 'Complete catalog of road products: traffic cones, barriers, speed bumps, parking stops and more. Guaranteed quality.'
          : 'Catalogue complet de produits routiers : cônes de signalisation, barrières, ralentisseurs, butées de stationnement et plus encore. Qualité garantie.'}
        keywords="productos viales, conos tráfico, barreras viales, resaltos viales, topes estacionamiento, señalización vial"
        ogImage={ogImage}
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />
      <div className="products-container">
        <div className="products-filters">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleCardClick(product.id)}
              >
                <div className="card-image">
                  <img src={productImages[product.id]?.[0] || ''} alt={product.name} />
                </div>
                <div className="card-content">
                  <h3 className="card-name">{product.name}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>{t.products.noResults}</p>
            </div>
          )}
        </div>
      </div>

      {selectedProductData && (
        <ProductModal
          product={selectedProductData}
          images={productImages[selectedProductData.id] || []}
          isOpen={selectedProduct !== null}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Products;
