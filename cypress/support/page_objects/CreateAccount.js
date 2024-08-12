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
  submitBtn = '[data-cy="submitForm"]';
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
  getSubmitBtn() {
    return cy.get(this.submitBtn);
  }
  getLoginLink() {
    return cy.get(this.loginLink);
  }

  // Metodos
  setUpUsernameAndPassword(user, pass) {
    this.getUserInput().type(user);
    this.getPasswordInput().type(pass);
  }

  setUpGender(gender) {
    switch (gender) {
      case "male":
        return this.getMaleInput().click();
        break;
      case "female":
        return this.getFemaleInput().click();
        break;
      case "other":
        return this.getOtherInput().click();
        break;
    }
  }

  setUpDayMonthYear(day, month, year) {
    // VALIDAR que los NUMEROS sean validos
    this.getDayInput().select(day - 1);
    this.getMonthInput().select(month - 1);
    this.getYearInput().select(year - 1921);
  }
}

export const onCreateAccountPage = new CreateAccount();
