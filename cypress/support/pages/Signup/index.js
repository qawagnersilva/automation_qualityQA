/// <reference types="Cypress" />

const elsignup = require('./elements').ELEMENTS

class Signup {

    accessSite(){
        cy.visit("https://automationexercise.com/signup")
    }

    clickSignupButton() {
        cy.get(elsignup.signupBtn).click()
    }

    form() {
        cy.get(elsignup.genderRadio).check()
        cy.get(elsignup.nameInput).type('Wagner Gomes')
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
    }

    SignUpInputs(){
        cy.get(elsignup.signupNameInput).type('Wagner Gomes')
        cy.get(elsignup.signupEmailInput).type('wagner.silva@acct.global')
    }
}
export default new Signup()

