// Fichier preload pour exposer des API Electron au frontend
const { contextBridge, ipcRenderer } = require('electron');

// Exposer des API protégées à la fenêtre du renderer.
contextBridge.exposeInMainWorld('electron', {
  // Vous pouvez ajouter ici des méthodes pour communiquer avec le processus principal
  sendMessage: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receiveMessage: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  isElectron: true,
  // Ajouter d'autres méthodes selon les besoins de votre application
}); 