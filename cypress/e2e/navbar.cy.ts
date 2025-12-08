describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Transactions', () => {
    cy.get('[data-selector="nav-item-transaction"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/transactions');
  });

  it('should navigate to Profil', () => {
    cy.get('[data-selector="nav-item-profil"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/profil');
  });
});
