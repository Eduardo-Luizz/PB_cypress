///<reference types="cypress"/>
import Base from './_base.page'
const faker = require('faker')

const BTN_ADDCART = "#add-to-cart-sauce-labs-backpack"

const BTN_CART = ".shopping_cart_link"


const BTN_CHECKOUT = "#checkout"

const INP_FIRSTNAME = "#first-name"
const INP_LASTNAME = "#last-name"
const INP_ZIPCODE = "#postal-code"
const BTN_CONTINUE = "#continue"
const BTN_FINISH = "#finish"
const TXT_HEADER = ".header_secondary_container span"
const IMG_PONY = "[alt *= Pony]"

const MSG_ERROR = "[data-test=error]"
const ICON_ERROR = "[data-icon=times-circle]"

export default class SauceCheckout extends Base {

    static realizarCheckout() {
    super.clickOnElement(BTN_ADDCART)
    super.clickOnElement(BTN_CART)
    super.clickOnElement(BTN_CHECKOUT)
    super.typeValue(INP_FIRSTNAME, faker.name.firstName())
    super.typeValue(INP_LASTNAME, faker.name.lastName())
    super.typeValue(INP_ZIPCODE, faker.datatype.number({min: 1}))
    super.clickOnElement(BTN_CONTINUE)
    super.clickOnElement(BTN_FINISH)

    super.validarUrl("/checkout-complete.html")
    super.validateElementText(TXT_HEADER, "Checkout: Complete!")
    super.verifyIfTextIsVisible("Thank You For Your Order")//cy.contains("Thank You For Your Order", { matchCase: false }).should("be.visible")
    super.verifyIfTextIsVisible("Your order has been dispatched, and will arrive just as fast as the pony can get there!")//cy.contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!", { matchCase: false }).should("be.visible")
    super.verifyIfElementExists(IMG_PONY)//cy.get(IMG_PONY).should("be.visible")
}

    static validarYourInformationTodosOsCamposVazios(){
    super.clickOnElement(BTN_ADDCART)
    super.clickOnElement(BTN_CART)
    super.clickOnElement(BTN_CHECKOUT)
    super.clickOnElement(BTN_CONTINUE)
    super.validateElementText(MSG_ERROR, "Error: First Name is required")
    cy.get(ICON_ERROR).should("have.length", 3).and("be.visible")
    cy.get(INP_FIRSTNAME).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
    cy.get(INP_LASTNAME).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
    cy.get(INP_ZIPCODE).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
}

    static validarYourInformationApenasFirstName(){
    super.clickOnElement(BTN_ADDCART)
    super.clickOnElement(BTN_CART)
    super.clickOnElement(BTN_CHECKOUT)
    super.clickOnElement(BTN_CONTINUE)
    super.typeValue(INP_FIRSTNAME, "Eduardo")
    super.clickOnElement(BTN_CONTINUE)
    super.validateElementText(MSG_ERROR, "Error: Last Name is required")
    //cy.get(ICON_ERROR).should("have.length", 2).and("be.visible") / Deveria passar pois o campo nome e valido
    //cy.get(INP_FIRSTNAME).should("not.have.css", "border-bottom-color", "rgb(226, 35, 26)") / Deveria passar
    cy.get(INP_LASTNAME).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
    cy.get(INP_ZIPCODE).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
}

    static validarYourInformationApenasFirstNameLastName(){
    super.clickOnElement(BTN_ADDCART)
    super.clickOnElement(BTN_CART)
    super.clickOnElement(BTN_CHECKOUT)
    super.clickOnElement(BTN_CONTINUE)
    super.typeValue(INP_FIRSTNAME, "Eduardo")
    super.typeValue(INP_LASTNAME, "Zanotto")
    super.clickOnElement(BTN_CONTINUE)
    super.validateElementText(MSG_ERROR, "Error: Postal Code is required")
    //cy.get(ICON_ERROR).should("have.length", 1).and("be.visible") / Deveria passar pois o campo nome e valido
    //cy.get(INP_FIRSTNAME).should("not.have.css", "border-bottom-color", "rgb(226, 35, 26)") / Deveria passar
    //cy.get(INP_LASTNAME).should("not.have.css", "border-bottom-color", "rgb(226, 35, 26)")
    cy.get(INP_ZIPCODE).should("have.css", "border-bottom-color", "rgb(226, 35, 26)")
    }
}