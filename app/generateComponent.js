import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convertir l'URL du fichier en chemin classique
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Veuillez spécifier un nom de composant !");
  process.exit(1);
}

const componentDir = path.join(__dirname, "src", "components", componentName);

if (fs.existsSync(componentDir)) {
  console.error("❌ Ce composant existe déjà !");
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const componentCode = `import React from "react";
import "./${componentName}.css";

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

const stylesCode = `.${componentName.toLowerCase()} {
  /* Ajoute tes styles ici */
}`;

const testCode = `import React from "react";
import { render, screen } from "@testing-library/react";
import ${componentName} from "./${componentName}";

test("renders ${componentName} component", () => {
  render(<${componentName} />);
  expect(screen.getByText("${componentName}")).toBeInTheDocument();
});
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentCode);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), stylesCode);
fs.writeFileSync(path.join(componentDir, `${componentName}.test.jsx`), testCode);

console.log(`✅ Composant ${componentName} créé avec succès dans src/components/${componentName}`);
console.log(`🧪 Fichier de test ajouté : ${componentName}.test.jsx`);
