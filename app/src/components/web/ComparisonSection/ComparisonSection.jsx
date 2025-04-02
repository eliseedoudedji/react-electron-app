import React from "react";
import "./ComparisonSection.css";
const ComparisonSection = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        {/* Titre */}
        <h2 className="display-5 fw-semibold text-dark mb-4">
          Quelle version de <span className="text-primary">TalismanPro</span> vous convient le mieux ?
        </h2>
        
        <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
          Comparez les avantages des versions SaaS et Desktop pour choisir la meilleure solution selon vos besoins.
        </p>

        {/* Tableau Comparatif */}
        <div className="table-responsive">
          <table className="table table-bordered text-center bg-white shadow-sm">
            <thead className="table-primary">
              <tr>
                <th className="p-3 text-dark">Fonctionnalité</th>
                <th className="p-3 text-dark">SaaS</th>
                <th className="p-3 text-dark">Desktop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 fw-semibold">Accessible partout</td>
                <td className="p-3 text-success fw-bold">✅</td>
                <td className="p-3 text-danger fw-bold">❌</td>
              </tr>
              <tr>
                <td className="p-3 fw-semibold">Fonctionne sans internet</td>
                <td className="p-3 text-danger fw-bold">❌</td>
                <td className="p-3 text-success fw-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 fw-semibold">Mises à jour automatiques</td>
                <td className="p-3 text-success fw-bold">✅</td>
                <td className="p-3 text-danger fw-bold">❌</td>
              </tr>
              <tr>
                <td className="p-3 fw-semibold">Sécurité avancée</td>
                <td className="p-3 text-success fw-bold">✅</td>
                <td className="p-3 text-success fw-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 fw-semibold">Support technique</td>
                <td className="p-3 text-success fw-bold">✅</td>
                <td className="p-3 text-success fw-bold">✅</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a 
            href="#pricing" 
            className="btn btn-primary btn-lg shadow-sm"
          >
            Choisir ma version
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
