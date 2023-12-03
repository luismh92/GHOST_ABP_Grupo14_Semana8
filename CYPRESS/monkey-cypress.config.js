const cucumber = require  ('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })

    }
  },
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  env: {
    POOL_DATA: 'apriori',
  },
};

