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
   
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}