
Cypress.Commands.add("preencheCamposLogin", login => {
    cy.get("#user-name").type(login.username)
    cy.get("#password").type(login.password)
})