/// <reference types="Cypress" />

const ellogin = require('./elements').ELEMENTS

class Login {

    accessSite() {
        cy.visit("https://automationexercise.com")
    }

    clickLoginIcone() {
        cy.get(ellogin.loginIcone).click()
    }

    formLogin() {
        cy.get(ellogin.loginEmailInput).type('wagner.silva@acct.global')
        cy.get(ellogin.loginPasswordInput).type('abcd1234')
    }

    clickLoginButton() {
        cy.get(ellogin.loginBtn).click()
    }

    message() {
        cy.get(ellogin.messageFeedback).should('have.text', 'Your email or password is incorrect!')
    }
}

export default new Login()

