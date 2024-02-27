/// <reference types="cypress" />

describe("My Resume Site", () => {
  beforeEach(() => {
    cy.visit("https://resume.evefonwu.com/");
  });

  it("should contain my name in site title", () => {
    cy.get("title").should("contain", "EVE FON WU");
  });

  it("should display a visits info section", () => {
    cy.get('[data-cy="visits-info"]').should("be.visible");
  });

  it("should display count when visited", () => {
    cy.get('[data-cy="visits-count"]').then((content) => {
      const count = parseInt(content[0].innerText.split(" ")[0]);
      cy.wrap(count).should("be.a", "number");
    });
  });
});
