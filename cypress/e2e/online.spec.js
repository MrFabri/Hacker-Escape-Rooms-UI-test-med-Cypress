describe('Check if website is online', () => {
  it('passes', () => {
    cy.request('/').its('status').should('equal', 200);
    cy.visit('/');
  });
});