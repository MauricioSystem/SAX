import { useState, useMemo } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/SEO';
import CategoryFilter from '../components/ui/CategoryFilter';
import SearchInput from '../components/ui/SearchInput';
import ProductModal from '../components/ProductModal';

import { productImages } from '../utils/productImages';
import '../styles/Products.scss';

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
  const pageUrl = `${baseUrl}/products`;
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
