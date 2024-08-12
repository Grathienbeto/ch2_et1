export class CreateAccount {
  // Atributos
  userInput = '[data-cy="user"]';
  passwordInput = '[data-cy="pass"]';
  maleInput = '[data-cy="Male"]';
  femaleInput = '[data-cy="Female"]';
  otherInput = '[data-cy="Other"]';
  dayInput = '[data-cy="day"]';
  monthInput = '[data-cy="month"]';
  yearInput = '[data-cy="year"]';
  loginLink = '[data-cy="registertoggle"]';

  // Getters
  getUserInput() {
    return cy.get(this.userInput);
  }
  getPasswordInput() {
    return cy.get(this.passwordInput);
  }
  getMaleInput() {
    return cy.get(this.maleInput);
  }
  getFemaleInput() {
    return cy.get(this.femaleInput);
  }
  getOtherInput() {
    return cy.get(this.otherInput);
  }
  getDayInput() {
    return cy.get(this.dayInput);
  }
  getMonthInput() {
    return cy.get(this.monthInput);
  }
  getYearInput() {
    return cy.get(this.yearInput);
  }
  getLoginLink() {
    return cy.get(this.loginLink);
  }

  // Metodos
}

export const onCreateAccountPage = new CreateAccount();
