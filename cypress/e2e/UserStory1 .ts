import { LandingPage } from "cypress/page-objects/LandingPage.cs";
import { LoginPage } from "cypress/page-objects/LoginPage.cs";
import { RegisterUserPage } from "cypress/page-objects/RegisterNewUserPage.cs";

describe("USER STORY 1 ", () => {    
    
    let welcomelbl, userPassword, userName, url, firstName, lastName, wrongUserName, wrongUserPassword, invalidCredentials;
    
    before(() => {          
        cy.fixture('dataTesting.json').then((data) =>{ 
            welcomelbl = data.WelcomeLabel;
            userPassword = data.UserPassword;
            userName = data.UserName;
            url = data.URL;
            firstName = data.FirstName;
            lastName = data.LastName;
            wrongUserName = data.WrongUserName;
            wrongUserPassword = data.WrongUserPassword;
            invalidCredentials=  data.InvalidCredentials;
        });              
    }); 

    it("Happy path", () => {       
        cy.visit(url);
        cy.url().should('contain', url);
        cy.contains(welcomelbl);
        LoginPage.newUserButton.click();
        RegisterUserPage.firstNameField.type(firstName);
        RegisterUserPage.lastNameField.type(lastName);
        RegisterUserPage.passwordField.type(userPassword);
        RegisterUserPage.userNameField.type(userName);
        RegisterUserPage.iframeCheck.its('0.contentDocument.body').then(cy.wrap).find('#recaptcha-token').click({force: true});
        RegisterUserPage.registerButton.click();
        cy.on('window:confirm', () => true);
        LoginPage.userNameField.type(userName);
        LoginPage.userPasswordField.type(userPassword);
        LoginPage.loginButton.click();
        LandingPage.mainHeaderM.should("be.visible");
        LandingPage.userNameValueM.should("have.text",userName);
        cy.url().should('contain', url+"/profile");  
    });

    it("Wrong Credentials", () => {       
        cy.visit(url);
        cy.url().should('contain', url);
        cy.contains(welcomelbl);
        LoginPage.userNameField.type(userName);
        LoginPage.userPasswordField.type(userPassword);
        LoginPage.loginButton.click();
        LoginPage.invalidName.should("have.text",invalidCredentials);
    });
});