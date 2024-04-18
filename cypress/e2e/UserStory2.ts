describe("USER STORY 2 ", () => {            
    it("Wait", () => {       
        cy.visit("http://uitestingplayground.com/loaddelay");
        cy.get('.btn').contains('Button Appearing After Delay').should('be.visible');
    });

    it("Until wait path", () => {       
        cy.visit("http://uitestingplayground.com/loaddelay");
        cy.waitUntil(() =>  cy.get('.btn').contains('Button Appearing After Delay').should('be.visible'));
    });
});