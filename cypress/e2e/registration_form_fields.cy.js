const { type } = require("os");

describe("Registration Form Fields", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  });
   
  it("Check if the title is correct", () => {
    cy.get(".title").should("have.text","Registration Info");
  });

  it("Verify the handling of name input", () => {
    cy.get('#registration-form > :nth-child(1) > .input--style-1').clear().type('John').should('have.value', 'John');
  });

  it('Verify the handling of name input with special characters', () => {
    cy.get('#registration-form > :nth-child(1) > .input--style-1').type('{{}John Travolta,?}')
    .should('have.value', '{John Travolta,?}')
  });
  
  it('Accepts valid birthday date', () => {
    cy.get('#registration-form .js-btn-calendar').type('05/09/1974').click()
  });  

  it('Verify the handling of gender input', () => {
    cy.get('#registration-form select.gender').select('Male', {force: true});
  });

  it('Verify the handling of Phone Prefix input', () => {
    cy.get('#registration-form .rs-select2 select.prefix').select('+359', {force: true});
  });

  it('Verify the handling of Phone number input', () => {
    cy.get('#registration-form > :nth-child(3) > :nth-child(2) > .input-group > .input--style-1').type('895113999').click()
  });
  
  it('Verify the handling of EGN input',()=>{
    // cy.get('#registration-form > :nth-child(4) > .col-2 > .input-group > .input--style-1').type('7405095407')
    cy.get('.p-t-20 > .btn--green').should('be.visible').should('be.enabled').click();
  });


});