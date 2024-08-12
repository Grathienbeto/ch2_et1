/// <reference types="cypress" />

import { onCreateAccountPage } from "../../support/page_objects/CreateAccount";

// VARIABLES de CUENTA
let user = "Prueba1234";
let password = "prueba1234!";
let gender = "male";
let day = 15;
let month = 5;
let year = 2000;

describe("Create Account Page", () => {
  // Ir a la pagina de testeo, con comando propio
  beforeEach("Ir a la pagina", () => {
    cy.visitApp();
  });

  it("1. Register con todos los datos con formato correcto", () => {
    // Las siguientes cuatro lineas se repiten en muchos casos.
    // Pense en hacerlo en un solo metodo, pero preferi separarlos
    // para no tener un metodo muy grande, con muchas variables.
    onCreateAccountPage.setUpUsernameAndPassword(user, password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    // Assertion para corroborar que la ruta haya cambiado
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("2. Register con campo de  user vacío y el resto de los campos con  formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword("", password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();
    cy.wait(500);

    // Assert para validar que aparezca el popup default del browser
    // https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-check-that-a-forms-HTML-form-validation-is-shown-when-an-input-is-invalid
    onCreateAccountPage.getUserInput().then(($input) => {
      expect($input[0].validationMessage).to.eq("Completa este campo");
    });
  });

  it("3. Register con User corto y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword("P4" + random, password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("4. Register con User largo y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(
      "Prueba1234567890123456789" + random,
      password
    );
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("5. Register con User con un espacio vacío y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword("Pru eba1234", password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Username cannot have special characters");
  });

  it("6. Register con User con un carácter especial y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword("Prueba!1234", password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Username cannot have special characters");
  });

  it("7. Input Password debería aparecer con formato password", () => {
    onCreateAccountPage.setUpUsernameAndPassword("", password);
    onCreateAccountPage
      .getPasswordInput()
      .should("have.attr", "type", "password");
  });

  it("8. Register con Password vacío y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage.getPasswordInput().then(($input) => {
      expect($input[0].validationMessage).to.eq("Completa este campo");
    });
  });

  it("9. Register con Password con menos de 6 caracteres y el resto de os campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "pr12!");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Password must have between 6 and 16 characters");
  });

  it("10. Register con Password con más de 16 caracteres y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "pruba1234567890?!");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Password must have between 6 and 16 characters");
  });

  it("11. Register con Password sin números y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "pruebaprue!");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Password must have a special character and a number");
  });

  it("12. Register con Password sin letras y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "123412345!");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Password must have a special character and a number");
  });

  it("13. Register con Password sin caracteres especiales y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "prueba12345");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    onCreateAccountPage
      .getErrorMessage()
      .should("contain", "Password must have a special character and a number");
  });

  it("14. Register con Password con 6 caracteres y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "pru12!");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("15. Register con Password con  16 caracteres y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, "Pruba1234567890#");
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("16. Input Gender debería funcionar como un radio button", () => {
    onCreateAccountPage.getMaleInput().click();
    onCreateAccountPage.getMaleInput().should("have.attr", "data-checked");

    onCreateAccountPage.getFemaleInput().click();
    onCreateAccountPage.getFemaleInput().should("have.attr", "data-checked");
    onCreateAccountPage.getMaleInput().should("not.have.attr", "data-checked");

    onCreateAccountPage.getOtherInput().click();
    onCreateAccountPage.getOtherInput().should("have.attr", "data-checked");
    onCreateAccountPage
      .getFemaleInput()
      .should("not.have.attr", "data-checked");
  });

  it("17. Register dejando el input Gender vacío y el resto de los campos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, password);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    // Tuve que usar un selector un poco mas personalizado para poder encontrar el pop up
    cy.get('[role="radiogroup"]')
      .find('[value="Male"]')
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Selecciona una de estas opciones"
        );
      });
  });

  it("18. Register con todos los datos con formato correcto, modificando Male por Female", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user, password);
    onCreateAccountPage.setUpGender("female");
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("19. Register con todos los datos con formato correcto, modificando Male por Other", () => {
    onCreateAccountPage.setUpUsernameAndPassword(user + "11111", password);
    onCreateAccountPage.setUpGender("other");
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it.only("20. Validar el dropdown DoB", () => {});
});
