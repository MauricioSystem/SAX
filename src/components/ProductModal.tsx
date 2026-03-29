import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import '../styles/ProductModal.scss';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    category: string;
    summary: string;
    technicalDetails: string;
  };
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, images, isOpen, onClose }: ProductModalProps) => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentImageIndex(0); 
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    let message = '';
    
    if (language === 'es') {
      message = `Buenos días, estoy interesado en ${product.name} y quisiera cotizar (Cantidad) unidades.`;
    } else if (language === 'en') {
      message = `Good morning, I am interested in ${product.name} and would like to get a quote for (Quantity) units.`;
    } else {
      message = `Bonjour, je suis intéressé par ${product.name} et j'aimerais obtenir un devis pour (Quantité) unités.`;
    }
    
    const whatsappUrl = `https://wa.me/59178646205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="product-modal-backdrop" onClick={handleBackdropClick}>
      <div className="product-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="modal-images">
            <div className="main-image">
              <img src={images[currentImageIndex]} alt={product.name} />
            </div>
            {images.length > 1 && (
              <div className="image-thumbnails">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal-info">
            <h2 className="product-name">{product.name}</h2>

            <div className="info-section">
              <span className="info-label">{t.products.category}:</span>
              <span className="info-value">{product.category}</span>
            </div>

            <div className="info-section">
              <span className="info-label">{t.products.summary}:</span>
              <p className="info-value">{product.summary}</p>
            </div>

            <div className="info-section">
              <span className="info-label">{t.products.technicalDetails}:</span>
              <p className="info-value technical">{product.technicalDetails}</p>
            </div>

            <button className="whatsapp-button" onClick={handleWhatsApp}>
              {t.products.requestProduct}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
