import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import Signup from '../pages/Signup'
import Login from '../pages/Login'

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I access the home page", () => {
    Login.accessSite()
})

When("I access the login page", () => {
    Login.clickLoginIcone()
})

And("I submit incorrect username and password", () => {
    Login.formLogin()
    Login.clickLoginButton()
})

Then("should display an error message", () => {
    Login.message()
})

Given("I access the signup page", () => {
    Signup.accessSite()
    Signup.SignUpInputs()
    Signup.clickSignupButton()
})

When("I fill in the fields", () => {
    Signup.form()
})

