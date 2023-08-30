import login from "./login.cy";
const fileName = "sample.mp3";
describe("Login", () => {
  beforeEach(() => {
    login;
  });
  it("Upload a song", () => {
    cy.visit("http://localhost:8080/");
    cy.get("a").contains("Manage").click();
    cy.fixture(fileName).then((fileContent) => {
      cy.get("#dropzone-file").attachFile({
        fileContent,
        fileName,
        mimeType: "audio/mpeg",
      });
    });
  });
});
