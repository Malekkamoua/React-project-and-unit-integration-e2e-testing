describe("E2E Testing ", () => {
  it("Echec de connexion", () => {
    cy.visit("/");
    cy.wait(2000);

    cy.get(".mb-3 > .input-group-alternative > .form-control").type(
      "malekkamoua50@gmail.com"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "etudiants"
    );
    cy.get(".my-4").click();
    cy.url().should("include", "/login");

    cy.wait(3000);
  });
  it("Login + Ajout PFE", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get(".mb-3 > .input-group-alternative > .form-control").type(
      "cy@gmail.com"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "cypress"
    );
    cy.get(".my-4").click();

    cy.wait(3000);
    cy.get(":nth-child(3) > .nav-link").click();

    cy.get(":nth-child(1) > .input-group-alternative > .form-control").type(
      "Added this title from cypress"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "Section 1.10.32 of , written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
    );
    cy.get(":nth-child(3) > .mt-4").click();

    cy.wait(3000);
    cy.get(".navbar-nav > :nth-child(2) > .nav-link").click();
  });
});
