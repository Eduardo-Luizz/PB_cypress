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

    static removeItensCarrinho(){
        super.clickOnElement(BTN_ADDCART)
        super.clickOnElement(BTN_CART)
        super.clickOnElement(BTN_REMOVECART)
        super.verifyIfTextNotExist('Sauce Labs Backpack')//cy.contains("Sauce Labs Backpack").should("not.exist")
        super.verifyIfElementNotExist(VALUE_CART)//cy.get(VALUE_CART).should("not.exist")
        super.verifyIfElementNotExist(VALUE_CART)//cy.get(VALUE_DESCPRODUCT).should("not.exist")
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

}