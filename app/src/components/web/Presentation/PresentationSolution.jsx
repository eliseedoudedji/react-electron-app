import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faDesktop, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './PresentationSolution.css';

const PresentationSolution = () => {
  const sectionRef = useRef(null);

  // Fonction pour vérifier si un élément est visible dans la fenêtre
  const isElementInView = (el, offset = 150) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Fonction pour animer les éléments lorsqu'ils sont visibles
  const animateOnScroll = () => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const header = section.querySelector('.section-header');
    const description = section.querySelector('.section-description');
    const cards = section.querySelectorAll('.version-card');
    const cta = section.querySelector('.section-cta');

    if (isElementInView(header)) {
      header.classList.add('animate-in');
    }

    if (isElementInView(description)) {
      description.classList.add('animate-in');
    }

    cards.forEach(card => {
      if (isElementInView(card)) {
        card.classList.add('animate-in');
      }
    });

    if (isElementInView(cta)) {
      cta.classList.add('animate-in');
    }
  };

  useEffect(() => {
    // Animer les éléments au chargement initial
    setTimeout(() => {
      animateOnScroll();
    }, 300);

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener('scroll', animateOnScroll);

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section className="presentation-section" ref={sectionRef}>


      {/* En-tête de section */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Gérez votre comptabilité avec <span className="highlight-text">simplicité</span>
          </h2>

        </div>

        {/* Description */}
        <div className="section-description">
          <p className="description-text">
            <span className="brand-name">TalismanPro</span> est un logiciel de comptabilité moderne
            qui s'adapte à vos besoins. Disponible en version <span className="feature-tag">SaaS</span> et
            <span className="feature-tag"> Desktop</span>, il vous offre une flexibilité totale.
          </p>
        </div>

        {/* Cartes de versions */}
        <div className="version-cards">
          {/* Carte SaaS */}
          <div className="version-card saas-card">
            <div className="card-decoration"></div>
            <div className="card-content">
              <div className="card-icon-container">
                <div className="card-icon-bg"></div>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faCloud} size="2x" />
                </div>
              </div>
              <h3 className="card-title">Version SaaS</h3>
              <p className="card-description">
                Accédez à votre comptabilité depuis n'importe où, à tout moment, avec notre solution cloud sécurisée.
              </p>
              <ul className="card-features">
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Mises à jour automatiques</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Accès multi-appareils</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Sauvegardes cloud</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Collaboration en temps réel</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Carte Desktop */}
          <div className="version-card desktop-card">
            <div className="card-decoration"></div>
            <div className="card-content">
              <div className="card-icon-container">
                <div className="card-icon-bg"></div>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faDesktop} size="2x" />
                </div>
              </div>
              <h3 className="card-title">Version Desktop</h3>
              <p className="card-description">
                Une solution puissante installée localement pour un contrôle total sur vos données.
              </p>
              <ul className="card-features">
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Fonctionnement hors ligne</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Performances optimisées</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Contrôle total des données</span>
                </li>
                <li className="card-feature-item">
                  <span className="feature-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="feature-text">Intégration système avancée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="section-cta">
          <a href="#contact" className="cta-button">
            Découvrir nos solutions
            <span className="button-icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PresentationSolution;