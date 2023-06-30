/// <reference types="Cypress" />

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
            cy.get(elsignup.signupNameInput).type('Wagner Gomes')
            cy.get(elsignup.signupEmailInput).type('wagner.silva@acct.global')
        } else if (Cypress.env('country') === "USA") {
            cy.get(elsignup.signupNameInput).type('Bryan James')
            cy.get(elsignup.signupEmailInput).type('brayan.james@gmail.com')
        } else if (Cypress.env('country') === "ALE") {
            cy.get(elsignup.signupNameInput).type('Oliver Kahn')
            cy.get(elsignup.signupEmailInput).type('oliver@gmail.com')
        } 
    }

    form() {
        if (Cypress.env('country') === "BRA") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type('abcd1234')
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select('1994')
            cy.get(elsignup.firstNameInput).type('Wagner')
            cy.get(elsignup.lastNameInput).type('Gomes')
            cy.get(elsignup.companyInput).type('Quality')
            cy.get(elsignup.adress1Input).type('Rua Lourenço Zanette')
            cy.get(elsignup.adress2Input).type('Rua Joaquim nabuco')
            cy.get(elsignup.countrySelect).select('Canada')
            cy.get(elsignup.stateInput).type('Santa Catarina')
            cy.get(elsignup.cityInput).type('Criciúma')
            cy.get(elsignup.zipcodeInput).type('88809-470')
            cy.get(elsignup.mobileNumberInput).type('48-996247927')
        } else if (Cypress.env('country') === "USA") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type('abcd1234')
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select('1994')
            cy.get(elsignup.firstNameInput).type('Brayan')
            cy.get(elsignup.lastNameInput).type('James')
            cy.get(elsignup.companyInput).type('Apple')
            cy.get(elsignup.adress1Input).type('Pennsylvania Avenue')
            cy.get(elsignup.adress2Input).type('Pennsylvania Avenue Blue')
            cy.get(elsignup.countrySelect).select('United States')
            cy.get(elsignup.stateInput).type('Flórida')
            cy.get(elsignup.cityInput).type('Orlando')
            cy.get(elsignup.zipcodeInput).type('88856475')
            cy.get(elsignup.mobileNumberInput).type('407-85698547')
        } else if (Cypress.env('country') === "ALE") {
            cy.get(elsignup.genderRadio).check()
            cy.get(elsignup.passwordInput).type('abcd1234')
            cy.get(elsignup.daySelect).select(5)
            cy.get(elsignup.monthSelect).select(10)
            cy.get(elsignup.yearSelect).select('1980')
            cy.get(elsignup.firstNameInput).type('Oliver')
            cy.get(elsignup.lastNameInput).type('Kahn')
            cy.get(elsignup.companyInput).type('Seleção alemã')
            cy.get(elsignup.adress1Input).type('Unter den Linden em  2.')
            cy.get(elsignup.adress2Input).type('Karl-Marx-Allee')
            cy.get(elsignup.countrySelect).select('Canada')
            cy.get(elsignup.stateInput).type('Koln')
            cy.get(elsignup.cityInput).type('Berlim')
            cy.get(elsignup.zipcodeInput).type('88809-470')
            cy.get(elsignup.mobileNumberInput).type('458-48849048')
        }
    }

}
export default new Signup()

