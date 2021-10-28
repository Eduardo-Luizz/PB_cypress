/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'

describe("Testes na rota login", () => {
    beforeEach(() => {
        SauceLogin.acessarSauceDemo()
    })
    it("Fazer login corretamente", () => {
        SauceLogin.logar()
    })
    it("Fazer login com usuário bloqueado", () => {
        SauceLogin.logarComUsuarioLocked()
    })
})