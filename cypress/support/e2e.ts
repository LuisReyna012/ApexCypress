

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {

  // don't want to fail the test so we return false

  if (err.message.includes('not from Cypress')) {

    return false;

  }

});

