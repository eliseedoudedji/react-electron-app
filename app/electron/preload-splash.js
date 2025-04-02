const { contextBridge, ipcRenderer } = require('electron');

// Exposer une API sécurisée au processus de rendu
contextBridge.exposeInMainWorld('api', {
  // Envoyer des messages au processus principal
  send: (channel, data) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['splash-screen-loaded'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  }
});
