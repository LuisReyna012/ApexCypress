import { LandingPage } from "cypress/page-objects/LandingPage.cs";
import { LoginPage } from "cypress/page-objects/LoginPage.cs";

describe("USER STORY 3 ", () => {      
    let url, userPassword;
    
    before(() => {          
        cy.fixture('dataTesting.json').then((data) =>{ 
            url = data.URL1;
            userPassword = data.UserPassword;
        });              
    }); 

    it("Session saved", () => {       
        cy.visit(url);
        LoginPage.userNameField.type("lreyna2");
        LoginPage.userPasswordField.type(userPassword);
        LoginPage.loginButton.click();        
        cy.session('lreyna2', () => { });
    });

    it("Session restored", () => {       
        cy.visit(url);
        cy.session('lreyna2', () => { });
        cy.visit(url+"/profile");
        cy.url().should('contain', url+"/profile");  
    });
});