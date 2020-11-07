describe("Search", () => {
    xit("Verify results are displayed after search", () => {
        cy.visit("/search");
        cy.get("input[type=\"search\"]").type("javascript")
            .should("have.value", "javascript")
            .type("{enter}");
        cy.get(".discovery-card").its('length')
            .should('be.gt', 0);
    });

    it("Verify no results are displayed after search", () => {
        cy.visit("/search");
        cy.get("input[type=\"search\"]").type("noresultsquerytest")
            .should("have.value", "noresultsquerytest");
        cy.get("button#search-box-submit").click();
        cy.get(".discovery-card").should("not.be.visible");
        cy.get(".program-wrapper .alert-message")
            .should('have.text', "No programs were found to match your search results.Check out some popular programs below.")
    });
});