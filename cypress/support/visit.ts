declare namespace Cypress {
  interface Chainable<Subject> {
    visitTest: typeof visitTest;
  }
}

function visitTest(): Cypress.Chainable<Cypress.AUTWindow> {
  return cy.visit('0.0.0.0:3000', {
    retryOnNetworkFailure: true,
    retryOnStatusCodeFailure: true
  });
}
Cypress.Commands.add('visitTest', visitTest);
