// const { type } = require("os");
beforeEach(() => {
  cy.viewport(1024, 768);
  cy.visit("http://localhost:3000");
});

it('Phone number corresponds to the following schema', () => {
  const prefix = "+359";
  const minMobOperatorNumber = 882;
  const maxMobOperatorNumber = 895;
  const minNumber = 100000;
  const maxNumber = 999999;
  const mobileOperator = randomIntFromInterval(minMobOperatorNumber, maxMobOperatorNumber);
  const number = randomIntFromInterval(minNumber, maxNumber)
  const phoneNumber = `${prefix}${mobileOperator}${number}`;
  cy.get('#registration-form .rs-select2 select.prefix').select(prefix, {force: true});
  cy.get('#registration-form > :nth-child(3) > :nth-child(2) > .input-group > .input--style-1').type(phoneNumber);
});

it('Birthday is randomly selcted and new user is between 18 and 75 years old',()=> {
  const minAge = 18;
  const maxAge = 75;
  const age = Cypress._.random(minAge, maxAge);
  const today = new Date();
  const currentYear = today.getFullYear();
  const minMonth = 0;
  const maxMonth = 12;
  const minDay = 1;
  const maxDay = 28;
  const randomMonth = Cypress._.random(minMonth,maxMonth);
  const randomDay = Cypress._.random(minDay,maxDay);
  const minCalendarNumber = 0;
  const maxCalendarNumber = 10;
  
  const randomDOB = new Date(currentYear - age, randomMonth, randomDay);
  cy.get('#registration-form .js-btn-calendar').type(randomDOB.toISOString().slice(minCalendarNumber,maxCalendarNumber));
})
   
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

