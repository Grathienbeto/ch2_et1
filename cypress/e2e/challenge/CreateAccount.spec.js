/// <reference types="cypress" />

import { onCreateAccountPage } from "../../support/page_objects/CreateAccount";

describe("Create Account Page", () => {
  // Ir a la pagina de testeo
  beforeEach("Ir a la pagina", () => {
    cy.visitApp();
  });

  it.only("1. Register con todos los datos con formato correcto", () => {
    onCreateAccountPage.setUpUsernameAndPassword("Prueba12345", "prueba1234!");
    onCreateAccountPage.setUpGender("male");
    onCreateAccountPage.setUpDayMonthYear(23, 7, 1989);
    onCreateAccountPage.getSubmitBtn().click();
  });

  it("2. Register con campo de  usuario vacío y el resto de los campos con  formato correcto", () => {});
});
