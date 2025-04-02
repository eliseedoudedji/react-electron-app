import React from "react";
import "./Fonctionalities.css";

const FeaturesSection = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        {/* Titre */}
        <h2 className="display-5 fw-semibold text-dark mb-4">
          Tout ce dont vous avez besoin pour gérer votre comptabilité
        </h2>
        
        <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
          TalismanPro vous offre des outils puissants pour une gestion financière fluide et efficace.
        </p>

        {/* Grille des fonctionnalités */}
        <div className="row">
          {/* Fonctionnalité 1 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/invoice.svg" alt="Facturation automatique" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Facturation automatique</h3>
              <p className="text-muted">
                Générez et envoyez vos factures en un clic avec suivi intégré.
              </p>
            </div>
          </div>

          {/* Fonctionnalité 2 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/expenses.svg" alt="Gestion des dépenses" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Gestion des dépenses</h3>
              <p className="text-muted">
                Suivez vos dépenses et optimisez votre budget en temps réel.
              </p>
            </div>
          </div>

          {/* Fonctionnalité 3 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/analytics.svg" alt="Comptabilité analytique" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Comptabilité analytique</h3>
              <p className="text-muted">
                Analysez vos finances et prenez des décisions éclairées.
              </p>
            </div>
          </div>

          {/* Fonctionnalité 4 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/dashboard.svg" alt="Tableau de bord interactif" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Tableau de bord interactif</h3>
              <p className="text-muted">
                Visualisez vos performances financières en un coup d'œil.
              </p>
            </div>
          </div>

          {/* Fonctionnalité 5 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/security.svg" alt="Sécurité des données" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Sécurité des données</h3>
              <p className="text-muted">
                Protégez vos informations avec des protocoles de sécurité avancés.
              </p>
            </div>
          </div>

          {/* Fonctionnalité 6 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4">
              <img src="/icons/integration.svg" alt="Intégrations multiples" className="w-25 mx-auto mb-3" />
              <h3 className="h5 fw-semibold text-dark">Intégrations multiples</h3>
              <p className="text-muted">
                Connectez TalismanPro avec vos outils préférés.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a 
            href="#pricing" 
            className="btn btn-primary btn-lg shadow-sm"
          >
            Commencer avec TalismanPro
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
