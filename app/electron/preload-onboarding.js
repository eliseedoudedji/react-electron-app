const { contextBridge, ipcRenderer, shell } = require('electron');

// Exposer une API sécurisée au processus de rendu
contextBridge.exposeInMainWorld('api', {
  // Envoyer des messages au processus principal
  send: (channel, data) => {
    // Liste blanche des canaux autorisés
    const validChannels = [
      'navigate-to-licence',
      'navigate-to-main',
      'verify-licence',
      'use-trial-version',
      'minimize-window',
      'close-window',
      'toggle-fullscreen',
      'view-changed',
      'open-external-link'
    ];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  
  // Recevoir des messages du processus principal
  receive: (channel, callback) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['licence-valid', 'licence-invalid', 'auth-success'];
    if (validChannels.includes(channel)) {
      // Supprimer les anciens écouteurs pour éviter les doublons
      ipcRenderer.removeAllListeners(channel);
      
      // Ajouter le nouvel écouteur
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  },
  
  // Ouvrir un lien externe dans le navigateur par défaut
  openExternalLink: (url) => {
    console.log('Ouverture du lien externe:', url);
    ipcRenderer.send('open-external-link', url);
  }
});
