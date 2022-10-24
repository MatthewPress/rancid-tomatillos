describe("Error Page", () => {
  
  beforeEach(() => {
    cy.visitBase();
  });

  it("Should not exist by default", () => {
    cy.get(".Error")
      .should("not.exist");
  });

  it("Should only render if an error has occurred", () => {
    it("Should receive an error message if the server codes a 500", () => {

      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 500,
        body: "Test 500 Error",
      });

      cy.visit("http://localhost:3000/")
        .wait(3000)
        .get(".Error")
        .should(
          "contain",
          "We apologize, there seems to have been an error with the server"
        );

    });

  });
});