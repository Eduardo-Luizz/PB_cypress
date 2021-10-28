/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'
import SauceInventory from "../pages/inventory.page";
import SauceCheckout from '../pages/checkout.page';

describe("Teste na aba Checkout", () => {
    beforeEach(() => {
        SauceLogin.acessarSauceDemo()
        SauceLogin.logar()
    })

    it("Realizar Checkout", () => {
        SauceCheckout.realizarCheckout()
    })

    it("Validar Your Information todos os campos vazios", () => {
        SauceCheckout.validarYourInformationTodosOsCamposVazios()
    })

    it("Validar Your Information apenas First name", () => {
        SauceCheckout.validarYourInformationApenasFirstName()
    })

    it("Validar Your Information apenas First name e Last name", () => {
        SauceCheckout.validarYourInformationApenasFirstNameLastName()
    })

})