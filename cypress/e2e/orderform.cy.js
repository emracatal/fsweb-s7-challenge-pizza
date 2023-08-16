/* describe('Name Test', function () {
    it('Explain what it does', function() {
	// 3A => Arrange, Action, Assert
        // actions and assertions go here 
	// cy.visit(url) : open a URL
	// expect() : Compare some results with expected values
    })
}) */

describe("Order form validations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("does home includes 1 button", () => {
    cy.get("button").should("have.length", 1);
  });

  it("does customer info form feedback works", () => {
    cy.get("button").click();
    cy.get("#name-input").type("Emra");
    cy.contains("En az 10 karakter girmelisiniz");
  });

  it("is form submit button disabled", () => {
    cy.get("button").click();
    cy.get("#confirm-order").should("be.disabled");
  });

  it("can form be submitted", () => {
    cy.get("button").click();
    cy.get(".size-picker > :nth-child(1)").click();
    cy.get("#name-input").type("Emra Çatal İstanbulda bir yer");
    cy.get("#confirm-order").should("be.enabled");
    cy.get("#confirm-order").click().get("h1").should("have.length", 2);
  });
});
