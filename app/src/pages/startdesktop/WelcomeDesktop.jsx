// DesktopPage.js
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

// Import de l'animation
import animationData from "@assets/animate.json";

const WelcomeDesktop = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // Afficher le bouton après 3 secondes et rediriger après 7 secondes
  useEffect(() => {
    // Afficher le bouton après 3 secondes
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 10000);

    // Rediriger automatiquement après 7 secondes
    const redirectTimer = setTimeout(() => {
      navigate('/dashboard');
    }, 15000);

    // Nettoyage des timers
    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="container" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Player
            autoplay
            loop
            speed={3}
            src={animationData}
            style={{ height: '110px', width: '150px' }}
          />
          <p style={{ textAlign: "center" }}>Initialisation des données ...</p>

          {/* Bouton qui apparaît après 3 secondes */}
          {showButton && (
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#4361ee",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Accéder au tableau de bord
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDesktop;