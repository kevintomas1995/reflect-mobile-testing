/// <reference types="cypress" />

Cypress.Commands.add("checkMobile", () => {
  cy.get("#desktop-nav").should("not.exist");
  cy.get("#desktop-span").should("not.exist");
  cy.get("#mobile-nav").should("be.visible");
  cy.get("#mobile-span").should("be.visible");
  cy.get("h1").contains("Mobile header");
});

Cypress.Commands.add("checkDesktop", () => {
  cy.get("#mobile-nav").should("not.exist");
  cy.get("#mobile-span").should("not.exist");
  cy.get("#desktop-nav").should("be.visible");
  cy.get("#desktop-span").should("be.visible");
  cy.get("h1").contains("Desktop header");
});

const mobileSizes = ["iphone-6", "samsung-note9", "iphone-xr", [300, 800]];
const desktopSizes = ["macbook-15", "macbook-13", "macbook-11", [1024, 768]];

context("Mobile Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("cy.viewport() - set the viewport size manually to mobile", () => {
    cy.viewport(320, 480);
    cy.checkMobile();
  });

  it("cy.viewport() - set the viewport size manually to desktop", () => {
    cy.viewport(800, 1300);
    cy.checkDesktop();
  });

  it("cy.viewport() - set the viewport size to mobile using predefined presets", () => {
    cy.viewport("samsung-s10");
    cy.checkMobile();
  });

  it("cy.viewport() - set the viewport size to desktop using predefined presets", () => {
    cy.viewport("macbook-15");
    cy.checkDesktop();
  });

  mobileSizes.forEach((size) => {
    it(`Should render mobile version on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:3000/");
      cy.checkMobile();
    });
  });

  desktopSizes.forEach((size) => {
    it(`Should render desktop version on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
      cy.visit("http://localhost:3000/");
      cy.checkDesktop();
    });
  });

  it("cy.viewport() - change the orientation of device", () => {
    cy.viewport("iphone-xr");
    cy.checkMobile();

    cy.viewport("iphone-xr", "landscape");
    cy.checkDesktop();
  });
});
