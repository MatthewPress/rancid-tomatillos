describe("NavBar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should render a NavBar", () => {
    cy.get(".NavBar").find("input");
  });
  it('Should return all movies with similar letters inside their title', () => {
    cy.get('.search-box').trigger('mouseover').should('be.visible');
    cy.get('input[type="text"]').click({ force: true }).type("Ro");
    cy.get('article').should('have.length', 4)
  })

  it("Should recieve an error message if no results match", () => {
    cy.get(".search-box").trigger("mouseover").should("be.visible");
    cy.get('input[type="text"]').click({ force: true }).type("I'm really hungry");
    cy.get(".No-Results").find("h2").should("contain", "No matching results.");
  });
});