describe("My first test", () => {
  it("Doesnt do much", () => {
    expect(true).to.equal(true);
  });
  it.only("Failed login", () => {
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
  });
  it("Loads with success", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get(".mb-3 > .input-group-alternative > .form-control").type(
      "malekkamoua50@gmail.com"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "etudiants"
    );
    cy.get(".my-4").click();

    cy.get(".mb-3 > .input-group-alternative > .form-control").should(
      "have.value",
      "malekkamoua50@gmail.com"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "etudiants"
    );
    cy.get("p").should("have.value", "incorrect email or password");

    cy.wait(3000);
    cy.get(":nth-child(3) > .nav-link").click();

    cy.get(":nth-child(1) > .input-group-alternative > .form-control").type(
      "Added this title from cypress wohooo"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "Section 1.10.32 of , written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    );
    cy.get(":nth-child(3) > .mt-4").click();
  });
});
