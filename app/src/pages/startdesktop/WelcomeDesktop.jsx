// DesktopPage.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

// Import de l'animation
import animationData from "@assets/animate.json";

const WelcomeDesktop = () => {
  const navigate = useNavigate();

  // Afficher le bouton après 3 secondes et rediriger après 7 secondes
  useEffect(() => {
    // Rediriger automatiquement après 7 secondes
    const redirectTimer = setTimeout(() => {
      navigate('/dashboard');
    }, 7000);

    // Nettoyage des timers
    return () => {
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
          <p style={{ textAlign: "center" }}>Chargement ...</p>


        </div>
      </div>
    </div>
  );
};

export default WelcomeDesktop;