import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function EmailConfirmationPage() {
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
 // Récupérer l'ID à partir de l'URL
 const { id } = useParams();
  useEffect(() => {


    if (!id) {
      console.error("ID manquant dans l'URL.");
      return;
    }



    
    // 🔁 Appel automatique de l’API à l’arrivée sur la page
    fetch(`https://talisman-pro-apis.onrender.com/api/v1/companies/confirm-company-email/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setConfirmed(true);
        setLoading(false);
        setShowModal(true);
      })
      .catch((err) => {
        console.error("Erreur de confirmation :", err);
        setLoading(false);
        // Affiche quand même le modal avec un message d’échec si tu veux
      });
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {loading ? (
        <>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
          <p className="mt-3">Confirmation de votre entreprise en cours...</p>
        </>
      ) : (
        <div>
          <h1 className="text-success mb-4">Entreprise confirmée ✅</h1>
          <p>Votre compte a bien été activé.</p>
        </div>
      )}

      {/* ✅ Modal Bootstrap */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-start">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation réussie</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Votre entreprise a été confirmée avec succès !</p>
              <p className="mb-0">
                Vous pouvez maintenant :
                <ul>
                  <li>Continuer sur la version SaaS</li>
                  <li>Ou fermer le navigateur et vous reconnecter sur l'app Desktop</li>
                </ul>
              </p>
            </div>
            <div className="modal-footer">
              <a href="/login" className="btn btn-primary">
                Aller sur le SaaS
              </a>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
