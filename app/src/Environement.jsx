import { useState, useEffect } from 'react';

export function useEnvironment() {
  const [isElectron, setIsElectron] = useState(false);
  const [environment, setEnvironment] = useState('');

  useEffect(() => {
    // Vérifier si l'application s'exécute dans Electron
    const isRunningInElectron = window.electron !== undefined;
    setIsElectron(isRunningInElectron);
    
    // Détecter l'environnement
    if (isRunningInElectron) {
      setEnvironment('Electron (Application Desktop)');
    } else if (window.location.protocol === 'file:') {
      setEnvironment('Fichier local (possible problème de chemin)');
    } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setEnvironment('Développement local (serveur web)');
    } else {
      setEnvironment('Web (serveur de production)');
    }
    
    // Log pour le débogage
    console.log('Environnement détecté:', environment);
    console.log('URL actuelle:', window.location.href);
    console.log('Protocol:', window.location.protocol);
  }, []);

  return {
    isElectron,
    environment,
    isWeb: !isElectron
  };
}

// Composant pour l'affichage (optionnel)
function EnvironmentDisplay() {
  const { environment } = useEnvironment();
  
  return (
    <div>
      <h1>Environnement détecté: {environment}</h1>
    </div>
  );
}

export default EnvironmentDisplay; 