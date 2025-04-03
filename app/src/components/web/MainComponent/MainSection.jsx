import React, { useEffect, useRef } from 'react';
import MainImage from '@assets/web/main-image.svg';
import './MainSection.css';

export default function MainSection() {
    // Références pour les animations
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);
    const shapesRef = useRef(null);

    // Animation au chargement
    useEffect(() => {
        // Ajouter les classes d'animation avec délai
        setTimeout(() => {
            if (titleRef.current) titleRef.current.classList.add('animate-in');
        }, 300);
        
        setTimeout(() => {
            if (subtitleRef.current) subtitleRef.current.classList.add('animate-in');
        }, 600);
        
        setTimeout(() => {
            if (buttonRef.current) buttonRef.current.classList.add('animate-in');
        }, 900);
        
        setTimeout(() => {
            if (imageRef.current) imageRef.current.classList.add('animate-in');
        }, 1200);
        
        setTimeout(() => {
            if (shapesRef.current) shapesRef.current.classList.add('animate-in');
        }, 1500);
    }, []);

    return (
        <div className="hero-section">
            <div className="background-shapes" ref={shapesRef}>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            
            <main className="container hero-container">
                <div className="row align-items-center">
                    {/* Texte d'introduction */}
                    <div className="col-lg-6 hero-content">
                        <h1 className="hero-title" ref={titleRef}>
                            Simplifiez votre <br /> 
                            <span className="gradient-text">Comptabilité</span> avec <br />
                            <span className="brand-text">TalismanPro</span>
                        </h1>
                        
                        <p className="hero-subtitle" ref={subtitleRef}>
                            Une solution intuitive et puissante qui transforme la gestion comptable.
                            Conçue pour les professionnels qui valorisent l'efficacité.
                        </p>
                        
                        <div className="hero-cta" ref={buttonRef}>
                            <button className="cta-button primary">
                                <span className="button-text">Commencer maintenant</span>
                                <span className="button-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </button>
                            
                            <button className="cta-button secondary">
                                <span className="button-text">Voir la démo</span>
                            </button>
                        </div>
                        
                        <div className="hero-features">
                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <span>Facile à utiliser</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <span>Support 24/7</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <span>Sécurisé</span>
                            </div>
                        </div>
                    </div>

                    {/* Image ou Illustration */}
                    <div className="col-lg-6 hero-image-container">
                        <div className="image-wrapper" ref={imageRef}>
                            <img src={MainImage} alt="TalismanPro Dashboard" className="hero-image" />
                            <div className="image-decoration"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
