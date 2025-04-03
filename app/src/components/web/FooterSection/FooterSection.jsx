import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faAngleRight, 
  faEnvelope, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer-section">
      {/* Effet de vague en haut du footer */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      {/* Contenu principal du footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* Colonne de la marque */}
            <div className="col-lg-3 col-md-6 footer-column">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="footer-logo-text">TalismanPro</div>
                </div>
                <p className="footer-description">
                  Simplifiez la gestion financière de votre entreprise avec notre solution comptable moderne et intuitive.
                </p>
              </div>
            </div>
            
            {/* Colonne Entreprise */}
            <div className="col-lg-3 col-md-6 footer-column">
              <h3 className="footer-heading">Entreprise</h3>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#about" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    À propos
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#careers" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Carrières
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#contact" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Contact
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#partners" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Partenaires
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Colonne Ressources */}
            <div className="col-lg-3 col-md-6 footer-column">
              <h3 className="footer-heading">Ressources</h3>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#blog" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Blog
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#documentation" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Documentation
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#help" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Centre d'aide
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#webinars" className="footer-link">
                    <FontAwesomeIcon icon={faAngleRight} className="footer-link-icon" />
                    Webinaires
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Colonne Newsletter */}
            <div className="col-lg-3 col-md-6 footer-column">
              <h3 className="footer-heading">Newsletter</h3>
              <form className="footer-form">
                <div className="footer-form-group">
                  <input 
                    type="email" 
                    className="footer-input" 
                    placeholder="Votre adresse email"
                    aria-label="Adresse email pour la newsletter"
                  />
                </div>
                <button type="submit" className="footer-button">
                  S'abonner
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </button>
              </form>
              
              <div className="footer-social">
                <a href="#facebook" className="social-icon" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#twitter" className="social-icon" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#instagram" className="social-icon" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Séparateur */}
          <hr className="footer-divider" />
          
          {/* Copyright */}
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} TalismanPro. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
