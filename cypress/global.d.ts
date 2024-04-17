/// <reference types="cypress" /> 
export{} 
declare global{
 namespace Cypress {
   interface Chainable {
     ntlmSso(value: string[]): Chainable<Element>
   }
 }
}