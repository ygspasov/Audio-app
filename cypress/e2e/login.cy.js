describe("Login user", () => {
  beforeEach(() => {});
  it("Should visit", () => {
    cy.visit("http://localhost:8080/");
    cy.get("a").contains("Login").click();
    cy.get("#email").click().type("yavor@hph.io");
    cy.get("#password").click().type("123456");
    cy.get("button").contains("Login").click();
    cy.get("a").contains("Log out").should("exist");
  });
});
