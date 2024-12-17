import type { Config } from 'prettier';

const config: Config = {
  semi: true, // Ajoute des points-virgules
  singleQuote: true, // Utilise des guillemets simples
  trailingComma: 'all', // Ajoute des virgules finales où c'est valide
  tabWidth: 2, // Définit la largeur d'indentation à 2 espaces
  printWidth: 80, // Limite la largeur des lignes à 80 caractères
  bracketSpacing: true, // Ajoute des espaces entre les crochets dans les objets
  arrowParens: 'always', // Ajoute des parenthèses autour des paramètres uniques dans les fonctions fléchées
};

export default config;
