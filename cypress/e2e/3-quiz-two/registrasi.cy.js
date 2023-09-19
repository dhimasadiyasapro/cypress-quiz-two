describe('Register Feature', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('Register normally', () => {
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Dhimas')
    cy.get('#LastName').type('Adiyasa')
    cy.generate_email('sbc49')
    cy.get('#Password').type('Qwerty123$')
    cy.get('#ConfirmPassword').type('Qwerty123$')
    cy.get('#register-button').click()
    cy.get('.result').should('contain', 'registration completed')
  })
})