describe("Test suite", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit("http://localhost:3000");
  });
   
  it("Check if the title is correct", () => {
    cy.get(".title").should("have.text","Registration Info");
  });
});
