const { contextBridge, ipcRenderer } = require('electron');

// Exposer une API sécurisée au processus de rendu
contextBridge.exposeInMainWorld('api', {
  // Envoyer des messages au processus principal
  send: (channel, data) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['verify-licence', 'navigate-to-main', 'open-trial-popup'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  
  // Recevoir des messages du processus principal
  receive: (channel, callback) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['licence-valid', 'licence-invalid'];
    if (validChannels.includes(channel)) {
      // Supprimer les anciens écouteurs pour éviter les doublons
      ipcRenderer.removeAllListeners(channel);
      
      // Ajouter le nouvel écouteur
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  }
});
