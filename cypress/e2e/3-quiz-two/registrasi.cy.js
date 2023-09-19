describe('Register Feature', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/')
  })

  it('Register normally', () => {
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Dhimas')
    cy.get('#LastName').type('Adiyasa')
    var today = new Date()
    var emailpref = today.getFullYear() + today.getMonth() 
    + today.getDate() + today.getHours() + today.getMinutes() 
    + today.getSeconds() + 'sbc49'
    cy.get('#Email').type(emailpref+'@yopmail.net')
    cy.get('#Password').type('Qwerty123$')
    cy.get('#ConfirmPassword').type('Qwerty123$')
    cy.get('#register-button').click()
    cy.get('.result').should('contain', 'registration completed')
  })
})