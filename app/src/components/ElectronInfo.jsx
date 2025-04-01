import { useState, useEffect } from 'react';

function ElectronInfo() {
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    // Vérifier si l'application s'exécute dans Electron
    setIsElectron(window.electron !== undefined);
  }, []);

  const sendMessageToElectron = () => {
    if (window.electron) {
      window.electron.sendMessage('test-message', 'Bonjour depuis React!');
    }
  };

  return (
    <div className="card">
      <h2>Electron Integration</h2>
      <p>
        {isElectron 
          ? "Cette application s'exécute dans Electron!" 
          : "Cette application s'exécute dans un navigateur web standard."}
      </p>
      {isElectron && (
        <button 
          className="btn btn-primary" 
          onClick={sendMessageToElectron}
        >
          Envoyer un message à Electron
        </button>
      )}
    </div>
  );
}

export default ElectronInfo; 