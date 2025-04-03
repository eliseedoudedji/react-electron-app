import React, { useState } from "react";
import "./ComparisonSection.css";

const ComparisonSection = () => {
  // État pour suivre l'onglet actif
  const [activeTab, setActiveTab] = useState("saas");

  // Données des fonctionnalités
  const features = [
    {
      name: "Accessible partout",
      saas: true,
      desktop: false,
      description: "Accédez à vos données depuis n'importe quel appareil connecté à internet"
    },
    {
      name: "Fonctionne sans internet",
      saas: false,
      desktop: true,
      description: "Continuez à travailler même sans connexion internet"
    },
    {
      name: "Mises à jour automatiques",
      saas: true,
      desktop: false,
      description: "Bénéficiez des dernières fonctionnalités sans intervention manuelle"
    },
    {
      name: "Sécurité avancée",
      saas: true,
      desktop: true,
      description: "Protection de vos données avec les derniers protocoles de sécurité"
    },
    {
      name: "Support technique",
      saas: true,
      desktop: true,
      description: "Assistance dédiée pour résoudre vos problèmes rapidement"
    },
    {
      name: "Intégration multi-plateformes",
      saas: true,
      desktop: false,
      description: "Synchronisation parfaite entre tous vos appareils"
    },
    {
      name: "Personnalisation avancée",
      saas: false,
      desktop: true,
      description: "Options de configuration étendues pour votre environnement spécifique"
    }
  ];

  return (
    <section className="comparison-section py-5">
      <div className="container">
        {/* Titre */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-semibold text-dark mb-3">
            Quelle version de <span className="text-primary">TalismanPro</span> vous convient le mieux ?
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Comparez les avantages des versions SaaS et Desktop pour choisir la meilleure solution selon vos besoins.
          </p>
        </div>

        {/* Sélecteur d'onglets */}
        <div className="comparison-tabs mb-4">
          <div className="comparison-tab-container">
            <button
              className={`comparison-tab ${activeTab === "saas" ? "active" : ""}`}
              onClick={() => setActiveTab("saas")}
            >
              <span className="tab-icon">☁️</span>
              <span className="tab-text">SaaS</span>
            </button>
            <button
              className={`comparison-tab ${activeTab === "desktop" ? "active" : ""}`}
              onClick={() => setActiveTab("desktop")}
            >
              <span className="tab-icon">💻</span>
              <span className="tab-text">Desktop</span>
            </button>
            <button
              className={`comparison-tab ${activeTab === "compare" ? "active" : ""}`}
              onClick={() => setActiveTab("compare")}
            >
              <span className="tab-icon">⚖️</span>
              <span className="tab-text">Comparaison</span>
            </button>
          </div>
        </div>

        {/* Contenu des onglets */}
        <div className="comparison-content">
          {/* Onglet SaaS */}
          {activeTab === "saas" && (
            <div className="comparison-pane saas-pane">
              <div className="version-header">
                <div className="version-icon">☁️</div>
                <h3 className="version-title">Version SaaS</h3>
                <p className="version-subtitle">Solution cloud accessible partout</p>
              </div>
              <div className="feature-cards">
                {features.filter(feature => feature.saas).map((feature, index) => (
                  <div className="feature-card" key={index}>
                    <div className="feature-icon">{feature.saas ? "✅" : "❌"}</div>
                    <h4 className="feature-name">{feature.name}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Onglet Desktop */}
          {activeTab === "desktop" && (
            <div className="comparison-pane desktop-pane">
              <div className="version-header">
                <div className="version-icon">💻</div>
                <h3 className="version-title">Version Desktop</h3>
                <p className="version-subtitle">Solution locale pour une autonomie maximale</p>
              </div>
              <div className="feature-cards">
                {features.filter(feature => feature.desktop).map((feature, index) => (
                  <div className="feature-card" key={index}>
                    <div className="feature-icon">{feature.desktop ? "✅" : "❌"}</div>
                    <h4 className="feature-name">{feature.name}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Onglet Comparaison */}
          {activeTab === "compare" && (
            <div className="comparison-pane compare-pane">
              <div className="modern-table-container">
                <div className="modern-table-header">
                  <div className="header-cell feature-cell">Fonctionnalité</div>
                  <div className="header-cell saas-cell">SaaS</div>
                  <div className="header-cell desktop-cell">Desktop</div>
                </div>
                <div className="modern-table-body">
                  {features.map((feature, index) => (
                    <div className="modern-table-row" key={index}>
                      <div className="body-cell feature-cell">
                        <span className="feature-name">{feature.name}</span>
                        <span className="feature-description">{feature.description}</span>
                      </div>
                      <div className="body-cell saas-cell">
                        <span className={`status-indicator ${feature.saas ? "positive" : "negative"}`}>
                          {feature.saas ? "✓" : "✗"}
                        </span>
                      </div>
                      <div className="body-cell desktop-cell">
                        <span className={`status-indicator ${feature.desktop ? "positive" : "negative"}`}>
                          {feature.desktop ? "✓" : "✗"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
