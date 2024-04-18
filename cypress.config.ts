import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
           
    },
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    reporter: 'cypress-multi-reporters',
    fixturesFolder: 'cypress/fixtures',
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporterOptions: {
      configFile: 'reporter.config.json',
    },
  },
  "video": false
});