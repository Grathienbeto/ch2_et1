const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    // ESTO DEBERIA SER UNA VARIABLE DE ENTORNO
    baseUrl: "https://pushing-it.vercel.app",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {},
  },
});
