import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Gardez une référence globale de l'objet window, sinon la fenêtre sera
// fermée automatiquement quand l'objet JavaScript sera garbage collecté.
let mainWindow;
let splash;
let appReady = false;
let splashReady = false;

// Durée minimale d'affichage du splash screen (en ms)
const MIN_SPLASH_DURATION = 10000;
let splashStartTime;

function createWindow() {
  // Enregistrer le temps de démarrage du splash screen
  splashStartTime = Date.now();

  console.log('Création du splash screen...');
  // Créer la fenêtre du Splash Screen
  splash = new BrowserWindow({
    width: 600,
    height: 400,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    center: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload-splash.js')
    }
  });

  // Charger l'image du splash screen
  splash.loadURL(`file://${__dirname}/splash.html`);

  // Pour déboguer le splash screen
  //splash.webContents.openDevTools({ mode: 'detach' });

  console.log('Création de la fenêtre principale...');
  // Créer la fenêtre principale mais la garder cachée
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, // Ne pas afficher immédiatement
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
    // Modification du chemin pour la production
    const distPath = path.join(__dirname, '..', 'dist', 'index.html');
    startUrl = `file://${distPath}`;
    console.log('Production path:', distPath);
  }

  console.log('Loading URL:', startUrl);
  mainWindow.loadURL(startUrl);

  // Ajouter ceci après mainWindow.loadURL(startUrl);
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });

  // Quand la fenêtre principale est prête à être affichée
  mainWindow.once('ready-to-show', () => {
    console.log('Fenêtre principale prête à être affichée');
    appReady = true;
    tryShowMainWindow();
  });

  // Émis lorsque la fenêtre est fermée.
  mainWindow.on('closed', function () {
    // Dé-référencer l'objet window, généralement vous stockeriez les fenêtres
    // dans un tableau si votre application supporte le multi-fenêtre, c'est le moment
    // où vous devriez supprimer l'élément correspondant.
    mainWindow = null;
  });
}

// Fonction pour vérifier si on peut afficher la fenêtre principale
function tryShowMainWindow() {
  console.log(`État actuel - appReady: ${appReady}, splashReady: ${splashReady}`);

  // Vérifier si les deux conditions sont remplies :
  // 1. La fenêtre principale est prête
  // 2. Le splash screen a été affiché pendant au moins MIN_SPLASH_DURATION
  if (appReady && splashReady) {
    console.log('Les deux conditions sont remplies, préparation à la fermeture du splash screen');
    const elapsedTime = Date.now() - splashStartTime;
    const remainingTime = Math.max(0, MIN_SPLASH_DURATION - elapsedTime);

    console.log(`Temps écoulé: ${elapsedTime}ms, temps restant: ${remainingTime}ms`);

    // Si le temps minimum n'est pas encore écoulé, attendre avant de fermer le splash
    setTimeout(() => {
      console.log('Fermeture du splash screen et affichage de la fenêtre principale');
      if (splash) {
        splash.destroy();
        splash = null;
      }
      if (mainWindow) {
        mainWindow.show();
      }
    }, remainingTime);
  } else {
    console.log('En attente de conditions supplémentaires avant de fermer le splash screen');
  }
}

// Écouter le message du splash screen indiquant que l'animation est terminée
ipcMain.on('splash-screen-loaded', () => {
  console.log('Message reçu: splash-screen-loaded');
  splashReady = true;
  tryShowMainWindow();
});

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