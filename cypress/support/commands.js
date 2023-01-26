Cypress.Commands.add(
  "loginByAuth0Api",
  (username: string, password: string) => {
    cy.log(`Logging in as ${username}`);
    const client_id = Cypress.env("REACT_APP_AUTH0_CLIENT_ID");
    const client_secret = Cypress.env("REACT_APP_AUTH0_CLIENT_SECRET");
    const audience = Cypress.env("REACT_APP_AUTH0_AUDIENCE");

    cy.request({
      method: "POST",
      url: `https://${Cypress.env("REACT_APP_AUTH0_DOMAIN")}/oauth/token`,
      body: {
        grant_type: "password",
        username,
        password,
        audience,
        client_id,
        client_secret,
      },
    }).then(({ body }) => {
      const claims = jwt.decode(body.id_token);
      const {
        nickname,
        name,
        picture,
        updated_at,
        email,
        email_verified,
        sub,
        exp,
      } = claims;

      const item = {
        body: {
          ...body,
          decodedToken: {
            claims,
            user: {
              nickname,
              name,
              picture,
              updated_at,
              email,
              email_verified,
              sub,
            },
            audience,
            client_id,
          },
        },
        expiresAt: exp,
      };

      window.localStorage.setItem("auth0Cypress", JSON.stringify(item));

      cy.visit("/");
    });
  }
);
