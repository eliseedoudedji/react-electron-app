import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileInvoiceDollar,
  faChartLine,
  faChartPie,
  faTachometerAlt,
  faShieldAlt,
  faPlug,
  faArrowRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import "./Fonctionalities.css";

const FeaturesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);

  // Données des fonctionnalités
  const features = [
    {
      icon: faFileInvoiceDollar,
      title: "Facturation automatique",
      description: "Générez et envoyez vos factures en un clic avec suivi intégré."
    },
    {
      icon: faChartLine,
      title: "Gestion des dépenses",
      description: "Suivez vos dépenses et optimisez votre budget en temps réel."
    },
    {
      icon: faChartPie,
      title: "Comptabilité analytique",
      description: "Analysez vos finances et prenez des décisions éclairées."
    },
    {
      icon: faTachometerAlt,
      title: "Tableau de bord interactif",
      description: "Visualisez vos performances financières en un coup d'œil."
    },
    {
      icon: faShieldAlt,
      title: "Sécurité des données",
      description: "Protégez vos informations avec des protocoles de sécurité avancés."
    },
    {
      icon: faPlug,
      title: "Intégrations multiples",
      description: "Connectez TalismanPro avec vos outils préférés."
    }
  ];

  // Diviser les fonctionnalités en slides pour le carousel
  const featuresPerSlide = 6;
  const totalSlides = Math.ceil(features.length / featuresPerSlide);

  // Vérifier si l'élément est visible dans la fenêtre
  const isElementInView = (el, offset = 150) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Animer les éléments lorsqu'ils sont visibles
  const handleScroll = () => {
    if (sectionRef.current && isElementInView(sectionRef.current)) {
      setIsVisible(true);
    }
  };

  // Changer de slide
  const goToSlide = (index) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Aller à la slide précédente
  const goToPrevSlide = () => {
    const newIndex = activeSlide === 0 ? totalSlides - 1 : activeSlide - 1;
    goToSlide(newIndex);
  };

  // Aller à la slide suivante
  const goToNextSlide = () => {
    const newIndex = activeSlide === totalSlides - 1 ? 0 : activeSlide + 1;
    goToSlide(newIndex);
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        goToNextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, isVisible]);

  // Observer le défilement pour déclencher les animations
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier la visibilité initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mettre à jour l'état actif des slides
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (index === activeSlide && slide) {
        slide.classList.add('active');
      } else if (slide) {
        slide.classList.remove('active');
      }
    });
  }, [activeSlide]);

  // Créer les slides pour le carousel
  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const slideFeatures = features.slice(
        i * featuresPerSlide,
        (i + 1) * featuresPerSlide
      );

      slides.push(
        <div
          key={`slide-${i}`}
          className={`carousel-slide ${i === activeSlide ? 'active' : ''}`}
          ref={el => slidesRef.current[i] = el}
        >
          <div className="features-grid">
            {slideFeatures.map((feature, index) => (
              <div
                key={`feature-${i}-${index}`}
                className="feature-card"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return slides;
  };

  return (
    <section className="features-section" ref={sectionRef}>
      {/* Arrière-plan animé */}


      <div className="container">
        {/* En-tête */}
        <div className="features-header">
          <h2 className="features-title">
            Tout ce dont vous avez besoin pour gérer votre comptabilité
          </h2>
          <p className="features-description">
            TalismanPro vous offre des outils puissants pour une gestion financière fluide et efficace.
          </p>
        </div>

        {/* Carousel de fonctionnalités */}
        <div className="features-carousel-container">
          <div className="features-carousel" ref={carouselRef}>
            {renderSlides()}
          </div>

          {/* Contrôles du carousel */}
          <div className="carousel-controls">
            <div
              className="carousel-arrow"
              onClick={goToPrevSlide}
              aria-label="Slide précédente"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>

            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Aller à la slide ${index + 1}`}
                ></div>
              ))}
            </div>

            <div
              className="carousel-arrow"
              onClick={goToNextSlide}
              aria-label="Slide suivante"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="features-cta">
          <a href="#pricing" className="cta-button">
            Commencer avec TalismanPro
            <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
