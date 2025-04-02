import React from "react";
import "./TestimonialsSection.css";
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-light text-center">
      <div className="container">
        {/* Titre */}
        <h2 className="display-5 fw-semibold text-dark mb-5">
          Ce que nos clients disent de <span className="text-primary">TalismanPro</span>
        </h2>

        {/* Témoignages */}
        <div className="row justify-content-center">
          {/* Témoignage 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0 text-muted">
                    "Avec TalismanPro, ma comptabilité est 100x plus rapide !"
                  </p>
                  <footer className="blockquote-footer mt-3">
                    Jean Dupont, <cite title="Source Title">Entrepreneur</cite>
                  </footer>
                </blockquote>
                <div className="d-flex justify-content-center mt-3">
                  {/* Étoiles */}
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Témoignage 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0 text-muted">
                    "Un outil simple et puissant pour gérer toutes mes finances !"
                  </p>
                  <footer className="blockquote-footer mt-3">
                    Marie Lefevre, <cite title="Source Title">Comptable</cite>
                  </footer>
                </blockquote>
                <div className="d-flex justify-content-center mt-3">
                  {/* Étoiles */}
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Témoignage 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0 text-muted">
                    "L'intégration avec ma banque est top, tout est automatisé !"
                  </p>
                  <footer className="blockquote-footer mt-3">
                    Marc Dubois, <cite title="Source Title">PME</cite>
                  </footer>
                </blockquote>
                <div className="d-flex justify-content-center mt-3">
                  {/* Étoiles */}
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos de clients */}
        <div className="mt-5">
          <h4 className="mb-4 text-dark">Nos partenaires de confiance</h4>
          <div className="d-flex justify-content-center gap-5">
            <img src="/logos/client1.png" alt="Client 1" width="100" />
            <img src="/logos/client2.png" alt="Client 2" width="100" />
            <img src="/logos/client3.png" alt="Client 3" width="100" />
            <img src="/logos/client4.png" alt="Client 4" width="100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
