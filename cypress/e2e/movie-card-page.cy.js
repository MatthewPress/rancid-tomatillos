describe("MovieCard Page", () => {
  
  beforeEach(() => {
    cy.visitBase()
      .get(".app--container")
      .find(".movie-box--display")
      .find('article')
      .find('img')
      .first()
      .click();
  });

  it('Should display information about a single selected movie', () => {
    cy.get('article')
      .find('h2')
      .contains('Money Plane');

    cy.get('article')
      .find('p')
      .contains('Action');
    
    cy.get('article')
      .find('h4')
      .contains('82 minutes');
  });

  it("Should take the user back to the homepage when the back button is pressed", () => {
    cy.get('article')
      .find('button')
      .click();

    cy.url()
      .should('be.equal', 'http://localhost:3000/');
  });
});