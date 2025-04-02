# Guide d'implémentation du Splash Screen pour Electron

Ce document explique en détail comment le splash screen a été implémenté dans cette application Electron, les fichiers nécessaires et le processus de fonctionnement.

## Fichiers nécessaires

Pour implémenter un splash screen fonctionnel, trois fichiers sont essentiels :

1. **splash.html** - Interface utilisateur du splash screen
2. **preload-splash.js** - Script de préchargement pour la communication
3. **main.js** (modifications) - Logique principale de gestion du splash screen

En plus, vous aurez besoin d'un fichier image :
- **splash-image.png** - L'image affichée dans le splash screen

## Processus de fonctionnement

Le splash screen fonctionne selon le processus suivant :

1. **Démarrage de l'application** :
   - Le processus principal (main.js) crée d'abord la fenêtre du splash screen
   - La fenêtre principale est également créée mais reste cachée (show: false)

2. **Affichage du splash screen** :
   - Le splash screen s'affiche avec une barre de progression en bas
   - La barre de progression se remplit progressivement
   - Des messages de statut sont affichés pour informer l'utilisateur

3. **Communication entre les processus** :
   - Le fichier preload-splash.js établit un canal de communication sécurisé
   - Lorsque l'animation du splash screen est terminée, un message 'splash-screen-loaded' est envoyé au processus principal

4. **Transition vers l'application principale** :
   - Le processus principal attend que :
     a) La fenêtre principale soit prête (événement 'ready-to-show')
     b) Le splash screen ait terminé son animation
     c) Un temps minimum d'affichage soit écoulé (pour éviter un flash trop rapide)
   - Une fois toutes ces conditions remplies, le splash screen est fermé et la fenêtre principale est affichée

## Détails d'implémentation

### 1. splash.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Métadonnées et styles CSS pour le splash screen -->
    <style>
        /* Styles pour le conteneur principal, l'image et la barre de progression */
    </style>
</head>
<body>
    <!-- Structure HTML du splash screen -->
    <div class="container">
        <img src="splash-image.png" alt="App Logo">
    </div>
    
    <!-- Barre de progression en bas de l'écran -->
    <div class="progress-container">
        <div class="progress-bar" id="progress-bar"></div>
    </div>
    <div class="status-text" id="status-text">Initializing...</div>
    
    <script>
        // Script pour simuler le chargement et mettre à jour la barre de progression
        // Envoie un message au processus principal quand l'animation est terminée
    </script>
</body>
</html>
```

### 2. preload-splash.js

```javascript
const { contextBridge, ipcRenderer } = require('electron');

// Exposer une API sécurisée au processus de rendu
contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    // Liste blanche des canaux autorisés
    const validChannels = ['splash-screen-loaded'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  }
});
```

### 3. Modifications dans main.js

```javascript
// Variables globales pour le splash screen
let splash;
let appReady = false;
let splashReady = false;
const MIN_SPLASH_DURATION = 3000;
let splashStartTime;

function createWindow() {
  // Création et configuration du splash screen
  splash = new BrowserWindow({
    // Configuration de la fenêtre du splash screen
    webPreferences: {
      preload: path.join(__dirname, 'preload-splash.js')
    }
  });
  
  // Chargement du splash screen
  splash.loadURL(`file://${__dirname}/splash.html`);
  
  // Création de la fenêtre principale (cachée)
  mainWindow = new BrowserWindow({
    show: false,
    // Autres configurations
  });
  
  // Événement ready-to-show pour la fenêtre principale
  mainWindow.once('ready-to-show', () => {
    appReady = true;
    tryShowMainWindow();
  });
}

// Fonction pour vérifier si on peut afficher la fenêtre principale
function tryShowMainWindow() {
  if (appReady && splashReady) {
    // Calcul du temps restant pour atteindre la durée minimale
    const elapsedTime = Date.now() - splashStartTime;
    const remainingTime = Math.max(0, MIN_SPLASH_DURATION - elapsedTime);
    
    // Transition après le délai
    setTimeout(() => {
      if (splash) {
        splash.destroy();
        splash = null;
      }
      if (mainWindow) {
        mainWindow.show();
      }
    }, remainingTime);
  }
}

// Écouter le message du splash screen
ipcMain.on('splash-screen-loaded', () => {
  splashReady = true;
  tryShowMainWindow();
});
```

## Personnalisation

Vous pouvez personnaliser le splash screen en modifiant :

1. **L'apparence** :
   - Modifiez les styles CSS dans splash.html
   - Remplacez l'image splash-image.png par votre propre logo
   - Ajustez les couleurs, polices et animations

2. **Le comportement** :
   - Modifiez la durée minimale d'affichage (MIN_SPLASH_DURATION)
   - Ajoutez des étapes supplémentaires dans le tableau loadingSteps
   - Personnalisez les messages de statut

3. **Les dimensions** :
   - Ajustez les dimensions de la fenêtre dans main.js (width, height)
   - Modifiez la taille de l'image et de la barre de progression

## Conseils de dépannage

Si le splash screen ne se ferme pas correctement :

1. Vérifiez les logs de la console pour détecter les erreurs
2. Assurez-vous que preload-splash.js utilise la syntaxe CommonJS (require) et non ES modules (import)
3. Vérifiez que le canal de communication 'splash-screen-loaded' est correctement configuré
4. Assurez-vous que les deux conditions (appReady et splashReady) sont remplies

## Conclusion

Cette implémentation de splash screen offre une expérience utilisateur professionnelle avec une barre de progression animée et des messages de statut. Elle utilise le modèle de communication IPC d'Electron pour une transition fluide entre le splash screen et l'application principale.
