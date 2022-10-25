describe("Landing Page", () => {
  
  beforeEach(() => {
    cy.visitBase();
  });

  it("Should render a header", () => {
    cy.get("Header")
      .contains("Rancid Tomatillos");
  });

  it("Should render a NavBar", () => {
    cy.get(".NavBar")
      .find("input");
  });

  it('Should return all movies with similar letters inside their title', () => {
    cy.get('.search-box')
      .trigger('mouseover')
      .should('be.visible');

    cy.get(".app--container")
      .find(".movie-box--display")
      .find("article")
      .should('have.length', 40);

    cy.get('input[type="text"]')
      .click({ force: true })
      .type("Ro");

      cy.get(".app--container")
      .find(".movie-box--display")
      .find("article")
      .should('have.length', 4);

  })

  it("Should recieve an error message if no results match", () => {
    cy.get(".search-box")
      .trigger("mouseover")
      .should("be.visible");

    cy.get('input[type="text"]')
      .click({ force: true })
      .type("I'm really hungry");

    cy.get("p")
      .should("contain", "Sorry! No matches have been found");
  });

  it('Should display all movie posters', () => {
    cy.get(".app--container")
      .find(".movie-box--display")
      .find("article")
      .should('have.length', 40);
  });

  it("Should take the user to a movies' page when it's poster is clicked", () => {
    cy.get(".app--container")
      .find(".movie-box--display")
      .find('article')
      .find('img')
      .first()
      .click();

    cy.url()
      .should('be.equal', 'http://localhost:3000/movie/694919');
  });
});