const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',

  /*env: {

    "supportFile": false,
    "chromeWebSecurity": false,
    "experimentalSessionSupport": true

  },*/

  pageLoadTimeout:120000,
  defaultCommandTimeout:10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
