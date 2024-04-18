describe('User Story 4', () => {
    let url;

    before(() => {          
        cy.fixture('dataTesting.json').then((data) =>{ 
            url = data.URL1;
        });              
    }); 

    it("intercept", { defaultCommandTimeout: 60000 }, () => {

        cy.visit("https://demoqa.com/links");
        cy.intercept("GET", "/created").as("createdTest");
        cy.get("a#created").click();
        // cy.wait("@createdTest").its("response.statusCode").should("eq",201);
        cy.wait("@createdTest").then( interception =>{
            let { statusCode, statusMessage } = interception.response;
            expect(statusCode).to.eq(201);
            expect(statusMessage).to.eq("Created");
        });
    });
  });