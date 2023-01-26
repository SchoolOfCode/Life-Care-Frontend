
cy.request({
  method: 'POST',
  url: `https://${Cypress.env('REACT_APP_AUTH0_DOMAIN')}/oauth/token`,
  body: {
    username: 'seana.s@lifecare.com',
    password: 'lifecaretestuser123!',
    grant_type: 'password',
    client_id:`${Cypress.env('REACT_APP_AUTH0_CLIENT_ID')}`,
    client_secret: `${Cypress.env('REACT_APP_AUTH0_CLIENT_SECRET')}`,
    audience: `${Cypress.env('REACT_APP_AUTH0_AUDIENCE')}`,
    scope: `${Cypress.env('REACT_APP_AUTH0_SCOPE')}`
  },
}).then(({ body }) => {
  const claims = jwt.decode(body.id_token)
  const { name, nickname, picture, updated_at, email, email_verified}  = claims

  const auth0Token = {
    body: {
      ...body,
      decodedToken: {
        claims,
        audience: `${Cypress.env('REACT_APP_AUTH0_AUDIENCE')}`,
        client_id: `${Cypress.env('REACT_APP_AUTH0_CLIENT_ID')}`,
        user: {
          name, 
          nickname, 
          picture,
          updated_at,
          email,
          email_verified,
        },
      }
    },
    expiresAt: exp
  }
  window.localStorage.setItem(`auth0Cypress`, JSON.stringify(auth0Token));
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})