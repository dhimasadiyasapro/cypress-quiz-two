import LoginPage from '../../support/page-objects/loginPage.js'

describe('Login feature', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login with valid user/password', () => {
    LoginPage.clickLogin()
    LoginPage.inputLogin()
    LoginPage.checkLogout()
    LoginPage.checkLoginEmail('2121sbc49@yopmail.net')
  })
})