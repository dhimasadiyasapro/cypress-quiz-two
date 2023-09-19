describe('Login feature', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/')
  })

  it('Login with valid user/password', () => {
    cy.get('.ico-login').click()
    cy.get('#Email').type('2121sbc49@yopmail.net')
    cy.get('#Password').type('Qwerty123$')
    cy.get('form > .buttons > .button-1').click()
    cy.get('.ico-logout').should('be.visible')
    cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text', '2121sbc49@yopmail.net')
  })
})