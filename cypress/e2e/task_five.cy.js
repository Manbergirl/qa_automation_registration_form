// const { type } = require("os");

describe("Task Five", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
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
  })

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
    
  it('EGN is valid based on age',()=>{
    const minAge = 18;
    const maxAge = 75;
    const today = new Date();
    const currentYear = today.getFullYear();
    const minMonth = 0;
    const maxMonth = 12;
    const minDay = 1;
    const maxDay = 28;
    const minYear = currentYear - maxAge;
    const maxYear = currentYear - minAge;
    const randomYear = Cypress._.random(maxYear, minYear);
    const randomMonth = Cypress._.random(minMonth, maxMonth);
    const randomDay = Cypress._.random(minDay, maxDay);
    const EGN = generateEGN(randomYear, randomMonth, randomDay, randomDigits(0, 4));
  
    cy.get('#registration-form > :nth-child(4) > .col-2 > .input-group > .input--style-1').type(EGN);
  })
});

function getLastNdigits(number, n) {
  return Number(String(number).slice(-n));
}

//Функцията добавя 0 пред числото;
//pad е функция която има два параметара;
//num е число започващо без 0;
//size е колко голямо искаме да бъде числото;
function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

//Мтематическа функция, която генерира рандом число в даден диапазон (мин) и (макс);
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Функция която връща числа базирани на старт и енд (0, 4) на базата на събстринг;
function randomDigits(start, end) {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(start, end);
}

//Функция която генерира;
//Година на раждане;
//Месец на раждане;
//Ден на раждане и последните 4 цифри от ЕГН-то;
//2 означава, че искаме да са две цифри + 0;
//var egn e променлива стойност за "ЕГН-хранилище" за данни; 
function generateEGN(yearOfBirth, monthOfBirth, dayOfBirth, lastDigits) {
  getLastNdigits(yearOfBirth, 2);
  pad(monthOfBirth, 2);
  pad(dayOfBirth, 2);

  var egn = `${pad(getLastNdigits(yearOfBirth, 2), 2)}${pad(monthOfBirth, 2)}${pad(monthOfBirth, 2)}${pad(dayOfBirth, 2)}${lastDigits.toString()}` 
  
  return egn;
}