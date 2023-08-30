import login from "./login.cy";
describe("Login", () => {
  beforeEach(() => {
    login;
  });
  it("Play music", () => {
    cy.visit("http://localhost:8080/");
    //Play the first song
    cy.get("#song-list tr ").find("a").first().click();
    cy.wait(2000);
    cy.get("a").contains("FlowMusic").click();
    //Check if the first song is playing
    cy.get("tr td").first().should("have.class", "currentSong");
  });
});
