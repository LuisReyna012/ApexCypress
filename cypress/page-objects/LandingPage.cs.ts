class LandingPageC {
    
    private mainHeader: string = "header > a > img";
    private userNameFld: string = "#userName";
    private userPasswordFld: string = "#password";
    private loginBtn: string = "#login";
    private newUserBtn: string = "#newUser"; 
    private userNameValue: string = "#userName-value"; 
    private logOutBtn: string = "#submit"; 
    
    
    public get mainHeaderM(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.mainHeader);
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

    public get userNameValueM(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.userNameValue);
    }   
    
    public get logOutButtonM(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.logOutBtn);
    } 
}

export const LandingPage = new LandingPageC();