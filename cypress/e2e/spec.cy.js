describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should render a  Header", () => {
    cy.get("Header")
      .contains("Rancid Tomatillos");
  });

  it('Should display all movie posters', () => {
    cy.get(".App")
      .find(".movie-box--display")
      .find("article")
      .should('have.length', 40)
  });

  it("From the home page, a user should be able to click on an image", () => {
    cy.get(".App")
      .find(".movie-box--display")
      .find('article')
      .find('img')
      .first()
      .click()

    cy.get('article')
      .find('h2')
      .contains('Money Plane')

    cy.get('article')
      .find('p')
      .contains('Action')
    
    cy.get('article')
      .find('h4')
      .contains('82 minutes')

    cy.url()
      .should('be.equal', 'http://localhost:3000/movie/694919')
      
  });

  it("Should take the user back to the homepage when the back button is pressed", () => {
    cy.get(".App")
      .find(".movie-box--display")
      .find('article')
      .find('img')
      .first()
      .click()

    cy.get('article')
      .find('button')
      .click()

      cy.url()
      .should('be.equal', 'http://localhost:3000/')
  });
})