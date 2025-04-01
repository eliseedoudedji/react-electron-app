import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Gardez une référence globale de l'objet window, sinon la fenêtre sera
// fermée automatiquement quand l'objet JavaScript sera garbage collecté.
let mainWindow;

function createWindow() {
  // Créer la fenêtre du navigateur.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Détermine l'URL à charger selon l'environnement
  let startUrl;
  
  if (process.env.NODE_ENV === 'development') {
    // En développement, connectez-vous au serveur de développement Vite
    startUrl = process.env.ELECTRON_START_URL || 'http://localhost:5173';
    // Ouvrir les DevTools
    mainWindow.webContents.openDevTools();
  } else {
    // En production, chargez le fichier index.html depuis dist
    const distPath = path.join(__dirname, '../dist/index.html');
    startUrl = new URL(`file://${distPath}`).toString();
    console.log('Production path:', distPath);
  }
  
  console.log('Loading URL:', startUrl);
  mainWindow.loadURL(startUrl);

  // Émis lorsque la fenêtre est fermée.
  mainWindow.on('closed', function () {
    // Dé-référencer l'objet window, généralement vous stockeriez les fenêtres
    // dans un tableau si votre application supporte le multi-fenêtre, c'est le moment
    // où vous devriez supprimer l'élément correspondant.
    mainWindow = null;
  });
}

// Cette méthode sera appelée quand Electron a fini
// de s'initialiser et est prêt à créer des fenêtres de navigateur.
// Certaines APIs peuvent être utilisées uniquement après cet événement.
app.on('ready', createWindow);

// Quitter quand toutes les fenêtres sont fermées.
app.on('window-all-closed', function () {
  // Sur macOS, il est commun pour une application et leur barre de menu
  // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // Sur macOS, il est commun de re-créer une fenêtre dans l'application quand
  // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres ouvertes.
  if (mainWindow === null) {
    createWindow();
  }
});

// Ajouter des gestionnaires d'événements IPC
ipcMain.on('test-message', (event, message) => {
  console.log('Message reçu du renderer process:', message);
  // Vous pouvez répondre ou effectuer des actions ici
});

// Dans ce fichier, vous pouvez inclure le reste du code spécifique au processus principal de
// votre application. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici. 