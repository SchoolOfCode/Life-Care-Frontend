// cypress/support/auth-provider-commands/auth0.ts
function loginViaAuth0Ui(username, password) {
    // App landing page redirects to Auth0.
    cy.visit('/');
    // Login on Auth0.
    cy.origin(Cypress.env('auth0_domain'), { args: { username: username, password: password } }, function (_a) {
        var username = _a.username, password = _a.password;
        cy.get('input#username').type(username);
        cy.get('input#password').type(password, { log: false });
        cy.contains('button[value=default]', 'Continue').click();
    });
    // Ensure Auth0 has redirected us back to the RWA.
    cy.url().should('equal', 'http://localhost:3000/');
}
Cypress.Commands.add('loginToAuth0', function (username, password) {
    var log = Cypress.log({
        displayName: 'AUTH0 LOGIN',
        message: ["\uD83D\uDD10 Authenticating | ".concat(username)],
        // @ts-ignore
        autoEnd: false,
    });
    log.snapshot('before');
    loginViaAuth0Ui(username, password);
    log.snapshot('after');
    log.end();
});
