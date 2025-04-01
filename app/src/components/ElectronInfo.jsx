import { useState, useEffect } from 'react';

function ElectronInfo() {
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

  const sendMessageToElectron = () => {
    if (window.electron) {
      window.electron.sendMessage('test-message', 'Bonjour depuis React!');
      console.log('Message envoyé à Electron');
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h2>Informations sur l'environnement</h2>
      <div className="alert alert-info">
        <p><strong>Environnement détecté:</strong> {environment}</p>
        <p><strong>URL actuelle:</strong> {window.location.href}</p>
      </div>
      
      {isElectron ? (
        <div className="alert alert-success">
          <p>✅ Application s'exécutant dans Electron</p>
          <button 
            className="btn btn-primary mt-2" 
            onClick={sendMessageToElectron}
          >
            Envoyer un message à Electron
          </button>
        </div>
      ) : (
        <div className="alert alert-warning">
          <p>⚠️ Application s'exécutant dans un navigateur web</p>
          <p>Certaines fonctionnalités Electron ne seront pas disponibles.</p>
        </div>
      )}
    </div>
  );
}

export default ElectronInfo; 