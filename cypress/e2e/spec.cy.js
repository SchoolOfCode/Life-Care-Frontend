// describe('Auth0', function () {
//   beforeEach(function () {
//     cy.task('db:seed')
//     cy.loginByAuth0Api(
//       Cypress.env('auth0_username'),
//       Cypress.env('auth0_password')
//     )
//   })

//   it('shows onboarding', function () {
//     cy.contains('Get Started').should('be.visible')
//   })
// })

describe('Auth0', function () {
  beforeEach(function () {
    cy.task('db:seed')
    // cy.intercept('POST', '/graphql').as('createBankAccount')
    cy.loginToAuth0(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    )
    cy.visit('/')
  })

  it('show dashboard button', function () {
    cy.contains('Dashboard').should('be.visible')
  })
})