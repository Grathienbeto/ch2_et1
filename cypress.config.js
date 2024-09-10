const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  // Variables de entorno
  env: {
    user: "Prueba1234",
    password: "prueba1234!",
    baseUrl: "https://pushing-it.vercel.app",
  },
  e2e: {
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {},
  },
});
