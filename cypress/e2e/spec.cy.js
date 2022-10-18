describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should render a  Header", () => {
    cy.get("Header").contains("Rancid Tomatillos");
  });
  it('Should display all movie posters', () => {
    cy.get(".App").find(".movie-box--display").find("article").should('have.length', 40)
  })
  it("From the home page, a user should be able to click on an image", () => {
    cy.get(".App").find(".movie-box--display").find('article').first().click()
  });
})