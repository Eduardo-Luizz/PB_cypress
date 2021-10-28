/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'
import SauceInventory from "../pages/inventory.page";

describe("Testes na aba inventory", () => {
    beforeEach(() => {
        SauceLogin.acessarSauceDemo()
        SauceLogin.logar()
    })

    it("Acessar página about pelo menu", () => {
        SauceInventory.acessarPaginaAbout()
    })

    it("Adicionar item ao carrinho e validar o botão", () => {
        SauceInventory.addItensCarrinho()
    })

    it("Validar item carrinho", () => {
        SauceInventory.validateItemCart()
    })

    it("Remover item do carrinho", () => {
        SauceInventory.removeItensCarrinho()
    })

})