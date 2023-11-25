const cucumber = require  ('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })

    },
    specPattern: "**/*.feature",
  },
  screenshotsFolder: "cypress/screenshots",
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  env: {
    POOL_DATA: 'apriori',
  },
};

