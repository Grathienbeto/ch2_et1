/// <reference types="cypress" />

import { onCreateAccountPage } from "../../support/page_objects/CreateAccount";

// VARIABLES de CUENTA
let random = Math.floor(Math.random() * 100);
let usuario = "Prueba1234" + random;
let password = "prueba1234!";
let gender = "male";
let day = 15;
let month = 5;
let year = 2000;
//

describe("Create Account Page", () => {
  // Ir a la pagina de testeo, con comando propio
  beforeEach("Ir a la pagina", () => {
    cy.visitApp();
  });

  it("1. Register con todos los datos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword(usuario, password);
    onCreateAccountPage.setUpGender(gender);
    onCreateAccountPage.setUpDayMonthYear(day, month, year);
    onCreateAccountPage.getSubmitBtn().click();

    // Assertion para corroborar que la ruta haya cambiado
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain("/home");
    });
  });

  it("2. Register con campo de  usuario vacío y el resto de los campos con  formato correcto", () => {
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

  it.only("7. Input Password debería aparecer con formato password", () => {});
});
