import React from 'react'
import './WelcomeDesktop.css'
export default function WelcomePage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="welcome-card p-5 text-center shadow-lg">
        {/* Logo */}
        <img src="/icons/logo.svg" alt="TalismanPro Logo" className="mb-3" width="80" />

        {/* Titre */}
        <h1 className="fw-bold text-white">Bienvenue sur TalismanPro</h1>

        {/* Description */}
        <p className="text-light opacity-75">
          Le logiciel de comptabilité conçu pour simplifier votre gestion financière.
        </p>

        {/* Bouton de connexion */}
        <button className="btn btn-primary btn-lg mt-3 w-100">Se connecter</button>

        {/* Lien d'inscription en bas à droite */}
        <div className="position-absolute bottom-0 end-0 p-3">
          <a href="#signup" className="text-light opacity-75 text-decoration-none small">
            Pas encore inscrit ? <span className="fw-bold text-info">Créez un compte</span>
          </a>
        </div>
      </div>
    </div>
  )
} 