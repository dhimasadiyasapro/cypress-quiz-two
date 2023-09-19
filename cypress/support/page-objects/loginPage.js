class LoginPage {
    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    clickLogin() {
        cy.get('.ico-login').click()
    }

    inputLogin() {
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            cy.login(datauser.username, datauser.password)
        })
    }

    checkLogout() {
        cy.get('.ico-logout').should('be.visible')
    }

    checkLoginEmail(email) {
        cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text', email)
    }
}

export default new LoginPage