module.exports = {
    testEnvironment: "jsdom",  // Simule un environnement navigateur pour React
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"  // Utilise Babel pour transformer JSX et ES6+
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"  // Mock des fichiers CSS
    },
    moduleFileExtensions: ["js", "jsx"], // Reconnaît les fichiers JS et JSX
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Charge les configurations globales pour les tests
  };
  