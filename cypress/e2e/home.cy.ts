describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should diplay title', () => {
    cy.get('[data-selector="home-title"]').should('contains.text', 'Hello');
  });
});
