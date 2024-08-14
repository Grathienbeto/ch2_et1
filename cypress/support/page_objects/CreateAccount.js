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

    this.getDayInput().select(day);
    this.getMonthInput().select(month);
    this.getYearInput().select(year);
  }

  /**
   * Para corroborar que esten todos los dias en el select
   */
  selectEachDay() {
    this.getDayInput().then((input) => {
      for (let i = 0; i < input.children().length; i++) {
        expect(input.children().eq(i).attr("value")).to.equal(`${i + 1}`);
      }
    });
  }

  /**
   * Para corroborar que esten todos los meses
   */
  selectEachMonth() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.getMonthInput().then((input) => {
      for (let i = 0; i < months.length; i++) {
        expect(input.children().eq(i).text()).to.equal(`${months[i]}`);
      }
    });
  }

  /**
   * Para corroborar que esten todos los años
   */
  selectEachYear() {
    this.getYearInput().then((input) => {
      for (let i = 0; i < input.children().length; i++) {
        //expect(input.children().eq(i).text()).to.equal(`${i + 1921}`);
        expect(input.children().eq(i).attr("value")).to.equal(`${i + 1921}`);
      }
    });
  }
}

export const onCreateAccountPage = new CreateAccount();
