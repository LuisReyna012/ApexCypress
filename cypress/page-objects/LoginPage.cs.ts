class LoginPageC {
    
    private h2Header: string = "h2";
    private userNameFld: string = "#userName";
    private userPasswordFld: string = "#password";
    private loginBtn: string = "#login";
    private newUserBtn: string = "#newUser";  
    private invalidCredentials: string = "input#userName.mr-sm-2.is-invalid.form-control";
    private nameInvalid: string = "#name";  

    
    public get welcomeLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.h2Header).contains("Welcome,");
    }    
    
    public get userNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.userNameFld);
    }    

    public get userPasswordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.userPasswordFld);
    }

    public get loginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginBtn);
    } 

    public get newUserButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.newUserBtn);
    } 

    public get invalidCredentialsM(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.invalidCredentials);
    } 

    public get invalidName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nameInvalid);
    }    

}

export const LoginPage = new LoginPageC();