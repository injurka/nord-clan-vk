describe('Test', () => {
  beforeEach(() => {
    cy.visitTest();
  });
  it('Main', () => {
    cy.get('main').should('exist');
  });
});
