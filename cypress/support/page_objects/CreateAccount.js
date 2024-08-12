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
  errorMessage = '[data-cy="errorMessage"]';

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
  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  // Metodos
  /**
   * Utilizar para pasar usuario y contraseña
   * @param {string} user
   * @param {string} pass
   */
  setUpUsernameAndPassword(user, pass) {
    // Para podes testear cuando UNO es campo vacio
    if (user == "") {
      this.getPasswordInput().type(pass);
      return;
    } else if (pass == "") {
      this.getUserInput().type(user);
      return;
    } else {
      this.getUserInput().type(user);
      this.getPasswordInput().type(pass);
    }
  }

  /**
   * Utilizar para seleccionar un genero.
   * Las variables son: male, female, other
   * @param {string} gender
   * @returns
   */
  setUpGender(gender) {
    switch (gender) {
      case "male":
        return this.getMaleInput().click();
      case "female":
        return this.getFemaleInput().click();
      case "other":
        return this.getOtherInput().click();
    }
  }

  /**
   * Utilizar para seleccionar fecha de nacimiento
   * @param {number} day
   * @param {number} month
   * @param {number} year
   */
  setUpDayMonthYear(day, month, year) {
    day = day - 1;
    month = month - 1;
    year = year - 1921;
    // valores entre 1 y 31
    if (day >= 1 && day <= 32) this.getDayInput().select(day);
    // valores entre 1 y 12
    if (month >= 1 && month <= 12) this.getMonthInput().select(month);
    // valores entre 1921 y 2020
    if (year >= 1 && year <= 99) this.getYearInput().select(year);
  }
}

export const onCreateAccountPage = new CreateAccount();
