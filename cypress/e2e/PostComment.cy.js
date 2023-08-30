import login from "./login.cy";
describe("Login", () => {
  beforeEach(() => {
    login;
  });
  it("Post a comment", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#song-list tr td span").find("i.fa-regular").first().click();
    //Post the comment
    cy.get("#comment ").click().type("Comment test");
    cy.get("button").contains("Post comment").click();
    cy.wait(2000);
    //Check if the comment is posted
    cy.get("#comments dd").contains("Comment test").should("exist");
  });
});
