const { contextBridge, ipcRenderer, shell } = require('electron');

// Exposer une API sécurisée au processus de rendu
contextBridge.exposeInMainWorld('api', {
  // Envoyer des messages au processus principal
  send: (channel, data) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['close-popup', 'use-trial-version'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  
  // Ouvrir un lien externe dans le navigateur par défaut
  openExternalLink: (url) => {
    shell.openExternal(url);
  }
});
