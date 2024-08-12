/// <reference types="cypress" />

import { onCreateAccountPage } from "../../support/page_objects/CreateAccount";

describe("Create Account Page", () => {
  // Ir a la pagina de testeo
  beforeEach("Ir a la pagina", () => {
    cy.visitApp();
  });

  it("Prueba", () => {
    onCreateAccountPage.getDayInput().select(31 - 1);
  });
});
