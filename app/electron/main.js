import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Gardez une référence globale de l'objet window, sinon la fenêtre sera
// fermée automatiquement quand l'objet JavaScript sera garbage collecté.
let mainWindow;
let splash;
let onboardingWindow; // Une seule fenêtre pour tous les écrans d'onboarding
let appReady = false;
let splashReady = false;

// Durée minimale d'affichage du splash screen (en ms)
const MIN_SPLASH_DURATION = 100;
let splashStartTime;

// État de l'application
let isAuthenticated = false;
let hasValidLicence = false;
let isTrialVersion = false;

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

  // Créer la fenêtre d'onboarding unique mais la garder cachée
  createOnboardingWindow();

  console.log('Création de la fenêtre principale...');
  // Créer la fenêtre principale mais la garder cachée
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, // Ne pas afficher immédiatement
    autoHideMenuBar: true, // Masquer la barre de menu
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
      console.log('Fermeture du splash screen et affichage de la fenêtre d\'onboarding');
      if (splash) {
        splash.destroy();
        splash = null;
      }
      // Afficher la fenêtre d'onboarding
      if (onboardingWindow) {
        onboardingWindow.show();
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

// Création de la fenêtre d'onboarding unique
function createOnboardingWindow() {
  onboardingWindow = new BrowserWindow({
    width: 900,
    height: 700,
    show: false,
    center: true,
    resizable: false,
    frame: false, // Fenêtre sans cadre pour une apparence desktop native
    transparent: false,
    autoHideMenuBar: true, // Masquer la barre de menu
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload-onboarding.js')
    }
  });

  onboardingWindow.loadURL(`file://${__dirname}/onboarding.html`);

  // Pour déboguer
  //onboardingWindow.webContents.openDevTools({ mode: 'detach' });

  onboardingWindow.on('closed', () => {
    onboardingWindow = null;
  });
}

// Fonction pour vérifier la validité d'une clé de licence
function verifyLicence(licenceKey) {
  // Simulation de vérification de licence
  // Dans une application réelle, vous feriez une vérification avec un serveur
  console.log('Vérification de la clé de licence:', licenceKey);

  // Pour cet exemple, on considère que toute clé de 19 caractères avec 3 tirets est valide
  const isValid = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(licenceKey);

  return isValid;
}

// Ajouter des gestionnaires d'événements IPC
ipcMain.on('test-message', (event, message) => {
  console.log('Message reçu du renderer process:', message);
  // Vous pouvez répondre ou effectuer des actions ici
});

// Gestion de la navigation entre les vues
ipcMain.on('view-changed', (event, viewName) => {
  console.log(`Changement de vue vers: ${viewName}`);
  // Aucune action nécessaire dans le processus principal car les vues sont gérées dans le renderer
});

ipcMain.on('navigate-to-main', () => {
  console.log('Navigation vers l\'écran principal');
  if (onboardingWindow) {
    onboardingWindow.hide();
  }
  if (mainWindow) {
    mainWindow.show();
  }
});

// Gestion de l'authentification
ipcMain.on('auth-callback', (event, authData) => {
  console.log('Callback d\'authentification reçu:', authData);
  isAuthenticated = true;

  // Informer la fenêtre d'onboarding que l'authentification a réussi
  if (onboardingWindow) {
    onboardingWindow.webContents.send('auth-success');
  }
});

// Gestion de la vérification de licence
ipcMain.on('verify-licence', (event, licenceKey) => {
  console.log('Demande de vérification de licence:', licenceKey);
  const isValid = verifyLicence(licenceKey);

  if (isValid) {
    hasValidLicence = true;
    isTrialVersion = false;
    event.sender.send('licence-valid');
  } else {
    event.sender.send('licence-invalid', 'La clé de licence fournie n\'est pas valide.');
  }
});

// Ces événements sont maintenant gérés dans le renderer process
// via les changements de vue dans la fenêtre d'onboarding unique

// Gestion des contrôles de fenêtre
ipcMain.on('minimize-window', (event) => {
  console.log('Minimisation de la fenêtre');
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    win.minimize();
  }
});

ipcMain.on('close-window', (event) => {
  console.log('Fermeture de la fenêtre');
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    win.close();
  }
});

ipcMain.on('toggle-fullscreen', (event) => {
  console.log('Basculement en mode plein écran');
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    const isFullScreen = win.isFullScreen();
    win.setFullScreen(!isFullScreen);
  }
});

// Gestion de l'ouverture des liens externes
ipcMain.on('open-external-link', (event, url) => {
  console.log('Ouverture du lien externe depuis main.js:', url);
  shell.openExternal(url).catch(err => {
    console.error('Erreur lors de l\'ouverture du lien externe:', err);
  });
});

ipcMain.on('use-trial-version', () => {
  console.log('Utilisation de la version d\'essai');
  isTrialVersion = true;
  hasValidLicence = false;

  // Passer à l'écran principal
  if (onboardingWindow) {
    onboardingWindow.hide();
  }
  if (mainWindow) {
    mainWindow.show();
  }
});

// Dans ce fichier, vous pouvez inclure le reste du code spécifique au processus principal de
// votre application. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.