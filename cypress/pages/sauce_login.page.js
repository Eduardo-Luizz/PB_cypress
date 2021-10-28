///<reference types="cypress"/>

import Base from './_base.page'

const INP_USERNAME = "#user-name"
const INP_PASSWORD = "#password"
const BTN_LOGIN = "#login-button"

const MSG_ERROR = "[data-test=error]"
const ICON_ERROR = "[data-icon=times-circle]"

export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit("https://www.saucedemo.com/")
    }

    static logar(){
        //cy.get(INP_USERNAME).type("standard_user")
        //cy.get(INP_PASSWORD).type("secret_sauce")
        //cy.get(BTN_LOGIN).click()
        //cy.url().should('contain', '/inventory')
        super.typeValue(INP_USERNAME, 'standard_user')
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
        super.validarUrl('/inventory.html')
    }

    static logarComUsuarioLocked(){
        super.typeValue(INP_USERNAME, 'locked_out_user')
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
        super.validateElementText(MSG_ERROR, "Epic sadface: Sorry, this user has been locked out.")
        //.get(ICON_ERROR).eq(0).should("be.visible")
        //cy.get(ICON_ERROR).eq(1).should("be.visible")
        //Dois juntos
        cy.get(ICON_ERROR).should("have.length", 2).and("be.visible")
        cy.get(INP_USERNAME).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
        cy.get(INP_PASSWORD).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
    }

}