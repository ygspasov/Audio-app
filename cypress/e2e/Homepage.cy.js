import login from "./login.cy";
describe("Login", () => {
  beforeEach(() => {
    login;
  });
  it("Homepage", () => {
    cy.visit("http://localhost:8080/");
    cy.get("h1").contains("Listen to Great Music!").should("be.visible");
    cy.get("p").first().contains("Here at FlowMusic").should("be.visible");
    //Check the table
    cy.get("#song-list").should("exist");
    cy.get("#song-list").find("th").should("have.length", 3);
    cy.get("#song-list").find("th").first().should("contain", "Song");
    cy.get("#song-list").find("th").eq(1).should("contain", "Genre");
    cy.get("#song-list").find("th").eq(2).should("contain", "Comments");
    cy.get("#song-list tr td").find("a").its("length").should("be.gt", 0);
  });
});
