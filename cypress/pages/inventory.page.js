///<reference types="cypress"/>


import Base from './_base.page'
const faker = require('faker')


const BTN_MENU = "#react-burger-menu-btn"
const BTN_ABOUT = "#about_sidebar_link"

const BTN_ADDCART = "#add-to-cart-sauce-labs-backpack"
const BTN_REMOVECART = "#remove-sauce-labs-backpack"
const VALUE_CART = ".shopping_cart_badge"

const BTN_CART = ".shopping_cart_link"
const VALUE_TXTPRODUCT = ".inventory_item_name"
const VALUE_DESCPRODUCT = ".inventory_item_desc"
const VALUE_PRICE = ".inventory_item_price"

const BTN_CHECKOUT = "#checkout"

const INP_FIRSTNAME = "#first-name"
const INP_LASTNAME = "#last-name"
const INP_ZIPCODE = "#postal-code"
const BTN_CONTINUE = "#continue"
const BTN_FINISH = "#finish"
const TXT_HEADER = ".header_secondary_container span"
const IMG_PONY = "[alt *= Pony]"


export default class SauceInventory extends Base {
    
    static acessarPaginaAbout(){
        super.clickOnElement(BTN_MENU)
        super.clickOnElement(BTN_ABOUT)
        super.validarUrl('https://saucelabs.com/')
    }

    static addItensCarrinho(){
        super.clickOnElement(BTN_ADDCART)
        super.validateElementText(BTN_REMOVECART, "Remove")
        super.validateElementText(VALUE_CART, 1)
    }

    static validateItemCart(){
        super.clickOnElement(BTN_ADDCART)
        super.clickOnElement(BTN_CART)
        super.validarUrl('/cart.html')
        super.validateElementText(VALUE_TXTPRODUCT, "Sauce Labs Backpack")
        super.validateElementText(VALUE_DESCPRODUCT, "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
        super.validateElementText(VALUE_PRICE, "$")
        super.validateElementText(VALUE_PRICE, "29.99")
    }

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
        cy.contains("Thank You For Your Order", { matchCase: false }).should("be.visible")
        cy.contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!", { matchCase: false }).should("be.visible")
        cy.get(IMG_PONY).should("be.visible")

    }
}