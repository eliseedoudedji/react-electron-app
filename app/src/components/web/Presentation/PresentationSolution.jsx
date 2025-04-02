

        const PresentationSection = () => {
            return (
              <section className="py-5 mt-5 mb-5 bg-light text-center">
                <div className="container">
                  {/* Titre */}
                  <h2 className="display-5 fw-semibold text-dark mb-5">
                    Gérez votre comptabilité en toute simplicité
                  </h2>
          
                  {/* Paragraphe */}
                  <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <span className="fw-bold text-primary">TalismanPro</span> est un logiciel de comptabilité moderne, 
                    disponible en version <span className="fw-bold">SaaS</span> et <span className="fw-bold">Desktop</span>, 
                    qui simplifie la gestion financière de votre entreprise.
                  </p>
          
                  {/* Blocs SaaS & Desktop */}
                  <div className="row justify-content-center">
                    {/* SaaS */}
                    <div className="col-md-5 mx-2 mb-4">
                      <div className="card border-0 shadow-lg p-4">
                        <img src="/icons/saas.svg" alt="SaaS Icon" className="w-25 mx-auto mb-3" />
                        <h3 className="h5 fw-semibold text-dark">Version SaaS</h3>
                        <p className="text-muted">
                          Accédez à votre comptabilité partout et à tout moment, sans installation.
                        </p>
                      </div>
                    </div>
          
                    {/* Desktop */}
                    <div className="col-md-5 mx-2 mb-4">
                      <div className="card border-0 shadow-lg p-4">
                        <img src="/icons/desktop.svg" alt="Desktop Icon" className="w-25 mx-auto mb-3" />
                        <h3 className="h5 fw-semibold text-dark">Version Desktop</h3>
                        <p className="text-muted">
                          Travaillez hors ligne avec un logiciel performant installé sur votre machine.
                        </p>
                      </div>
                    </div>
                  </div>
          
                  {/* CTA */}
                  <div className="mt-4">
                    <a 
                      href="#features" 
                      className="btn btn-primary btn-lg shadow-sm"
                    >
                      Découvrir les fonctionnalités
                    </a>
                  </div>
                </div>
              </section>
            );
          };
          
          export default PresentationSection;
          
   