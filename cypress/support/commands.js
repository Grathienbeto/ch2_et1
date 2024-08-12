/// <reference types="cypress" />

Cypress.Commands.add("visitApp", () => {
  cy.visit("/");
});
