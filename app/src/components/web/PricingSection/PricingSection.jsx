import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="py-16 bg-light text-center">
      <div className="container">
        {/* Titre */}
        <h2 className="display-5 fw-semibold text-dark mb-5">
          Choisissez le plan qui vous convient
        </h2>

        {/* Tableau des plans */}
        <div className="row justify-content-center">
          {/* Plan Gratuit / Démo */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <h3 className="text-primary">Gratuit / Démo</h3>
                <p className="text-muted mb-3">Idéal pour découvrir TalismanPro</p>
                <h4 className="text-dark">$0 / mois</h4>
                <ul className="list-unstyled mt-4 mb-4">
                  <li>Accès limité à certaines fonctionnalités</li>
                  <li>Support par e-mail</li>
                  <li>Essai de 30 jours</li>
                </ul>
                <a 
                  href="#"
                  className="btn btn-outline-primary text-primary px-6 py-3 rounded-lg"
                >
                  Commencer gratuitement
                </a>
              </div>
            </div>
          </div>

          {/* Plan Pro (SaaS) */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <h3 className="text-primary">Pro (SaaS)</h3>
                <p className="text-muted mb-3">Pour les entrepreneurs et PME</p>
                <h4 className="text-dark">$19 / mois</h4>
                <ul className="list-unstyled mt-4 mb-4">
                  <li>Facturation automatique</li>
                  <li>Tableau de bord interactif</li>
                  <li>Support 24/7</li>
                  <li>Accès à toutes les fonctionnalités en ligne</li>
                </ul>
                <a 
                  href="#"
                  className="btn btn-primary text-white px-6 py-3 rounded-lg"
                >
                  Commencer gratuitement
                </a>
              </div>
            </div>
          </div>

          {/* Plan Entreprise (Desktop ou SaaS Premium) */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <h3 className="text-primary">Entreprise (Premium)</h3>
                <p className="text-muted mb-3">Pour les grandes entreprises avec des besoins avancés</p>
                <h4 className="text-dark">$49 / mois</h4>
                <ul className="list-unstyled mt-4 mb-4">
                  <li>Version Desktop ou SaaS Premium</li>
                  <li>Fonctionnalités avancées de comptabilité analytique</li>
                  <li>Support personnalisé</li>
                  <li>Mises à jour automatiques</li>
                  <li>Formation et support dédié</li>
                </ul>
                <a 
                  href="#"
                  className="btn btn-primary text-white px-6 py-3 rounded-lg"
                >
                  Commencer gratuitement
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

