import login from "./login.cy";
describe("Login", () => {
  beforeEach(() => {
    login;
  });
  it("Post a comment", () => {
    cy.visit("http://localhost:8080/");
    cy.get("ul li a").contains("Manage").click();
    cy.get("i.fa-solid.fa-pen-to-square").first().click();
    cy.get("input.songTitle").first().click().clear().type("Test song name");
    cy.get("input.songGenre").first().click().clear().type("Test song genre");
    cy.wait(2000);
    cy.get("button").contains("Update").click();
    //Test the update
    cy.get("th.px-6.py-4.font-medium.text-primary").first().should("contain", "Test song name");
    cy.get("td.px-6.py-4").first().should("contain", "Test song genre");
  });
});
