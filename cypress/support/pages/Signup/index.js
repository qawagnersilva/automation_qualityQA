/// <reference types="Cypress" />
import dataSignup from '../../../fixtures/dataSignup.json'

const elsignup = require('./elements').ELEMENTS

class Signup {

    accessSite() {
        cy.visit("https://automationexercise.com/signup")
    }

    clickSignupButton() {
        cy.get(elsignup.signupBtn).click()
    }

    SignUpInputs() {
        if (Cypress.env('country') === "BRA") {
            cy.get(elsignup.signupNameInput).type(dataSignup.brName)
            cy.get(elsignup.signupEmailInput).type(dataSignup.brPass)
        } else if (Cypress.env('country') === "USA") {
            cy.get(elsignup.signupNameInput).type(dataSignup.usName)
            cy.get(elsignup.signupEmailInput).type(dataSignup.usPass)
        } else if (Cypress.env('country') === "ALE") {
            cy.get(elsignup.signupNameInput).type(dataSignup.aleName)
            cy.get(elsignup.signupEmailInput).type(dataSignup.alePass)
        }
    }

    form() {
        if (Cypress.env('country') === "BRA") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type(dataSignup.passwordForm)
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select(dataSignup.yearFormBRA)
            cy.get(elsignup.firstNameInput).type(dataSignup.firstNameBRA)
            cy.get(elsignup.lastNameInput).type(dataSignup.lastNameBRA)
            cy.get(elsignup.companyInput).type(dataSignup.companyBRA)
            cy.get(elsignup.adress1Input).type(dataSignup.adress1BRA)
            cy.get(elsignup.adress2Input).type(dataSignup.adress2BRA)
            cy.get(elsignup.countrySelect).select(dataSignup.brazil)
            cy.get(elsignup.stateInput).type(dataSignup.stateBRA)
            cy.get(elsignup.cityInput).type(dataSignup.cityBRA)
            cy.get(elsignup.zipcodeInput).type(dataSignup.zipCodeBRA)
            cy.get(elsignup.mobileNumberInput).type(dataSignup.mobileBRA)
        } else if (Cypress.env('country') === "USA") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type(dataSignup.passwordForm)
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select(dataSignup.yearFormUSA)
            cy.get(elsignup.firstNameInput).type(dataSignup.firstNameUSA)
            cy.get(elsignup.lastNameInput).type(dataSignup.lastNameUSA)
            cy.get(elsignup.companyInput).type(dataSignup.companyUSA)
            cy.get(elsignup.adress1Input).type(dataSignup.adress1USA)
            cy.get(elsignup.adress2Input).type(dataSignup.adress2USA)
            cy.get(elsignup.countrySelect).select(dataSignup.usa)
            cy.get(elsignup.stateInput).type(dataSignup.stateUSA)
            cy.get(elsignup.cityInput).type(dataSignup.cityUSA)
            cy.get(elsignup.zipcodeInput).type(dataSignup.zipCodeUSA)
            cy.get(elsignup.mobileNumberInput).type(dataSignup.mobileUSA)
        } else if (Cypress.env('country') === "ALE") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type('abcd1234')
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select(dataSignup.yearFormALE)
            cy.get(elsignup.firstNameInput).type(dataSignup.firstNameALE)
            cy.get(elsignup.lastNameInput).type(dataSignup.lastNameALE)
            cy.get(elsignup.companyInput).type(dataSignup.companyALE)
            cy.get(elsignup.adress1Input).type(dataSignup.adress1ALE)
            cy.get(elsignup.adress2Input).type(dataSignup.adress2ALE)
            cy.get(elsignup.countrySelect).select(dataSignup.germany)
            cy.get(elsignup.stateInput).type(dataSignup.stateALE)
            cy.get(elsignup.cityInput).type(dataSignup.cityALE)
            cy.get(elsignup.zipcodeInput).type(dataSignup.zipCodeALE)
            cy.get(elsignup.mobileNumberInput).type(dataSignup.mobileALE)
        }
    }

}
export default new Signup()

