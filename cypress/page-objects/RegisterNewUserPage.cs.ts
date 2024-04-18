class RegisterNewUserPage {
    
    private firstNameFld: string = "#firstname";
    private lastNameFld: string = "#lastname";
    private userNameFld: string = "#userName";
    private passwordFld: string = "#password";
    private registerBtn: string = "#register";  
    private backLoginBtn: string = "#gotologin";
    private iframe: string = "[style='width: 304px; height: 78px;'] > div > iframe";
    
    public get firstNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameFld);
    }    
    
    public get lastNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameFld);
    }    

    public get userNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.userNameFld);
    }

    public get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordFld);
    } 

    public get registerButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerBtn);
    } 

    public get backLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.backLoginBtn);
    } 

    public get iframeCheck(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.iframe).first();
    } 
}

export const RegisterUserPage = new RegisterNewUserPage();