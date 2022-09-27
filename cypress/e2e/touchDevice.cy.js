/// <reference types="cypress" />
import "cypress-cdp";

context("Mobile Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.CDP("Emulation.setTouchEmulationEnabled", {
      enabled: true,
      maxTouchPoints: 1,
    });
    cy.CDP("Emulation.setEmitTouchEventsForMouse", {
      enabled: true,
      configuration: "mobile",
    });
  });

  it("simulating touch device via CDP", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#touchDevice").contains("Touch device");
  });
});
