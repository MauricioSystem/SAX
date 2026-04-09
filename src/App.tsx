import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import { LanguageProvider } from './utils/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import AbogadosPage from './pages/AbogadosPage';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<AboutUs />} />
            <Route path="/legal-information" element={<AbogadosPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quienes-somos" element={<Navigate to="/information" replace />} />
            <Route path="/contactenos" element={<Navigate to="/legal-information" replace />} />
            <Route path="/productos" element={<Navigate to="/products" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
