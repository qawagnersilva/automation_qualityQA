import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})



Given("I access the home page", () => {
    cy.visit("https://automationexercise.com")
})

When("I access the login page", () => {
    cy.get('a[href="/login"]').click()
})

And("I submit incorrect username and password", () => {
    cy.get('[data-qa="login-email"]').type('wagner.silva@acct.global')
    cy.get('[data-qa="login-password"]').type('abcd1234')
    cy.get('[data-qa="login-button"]').click()
})

Then("should display an error message", () => {
    cy.get('p[style="color: red;"]').should('have.text', 'Your email or password is incorrect!')
})

