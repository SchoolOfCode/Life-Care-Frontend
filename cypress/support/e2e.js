// // ***********************************************************
// // This example support/e2e.js is processed and
// // loaded automatically before your test files.
// //
// // This is a great place to put global configuration and
// // behavior that modifies Cypress.
// //
// // You can change the location of this file or turn off
// // automatically serving support files with the
// // 'supportFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/configuration
// // ***********************************************************

// // Import commands.js using ES2015 syntax:
// import './commands'

// // Alternatively you can use CommonJS syntax:
// // require('./commands')

// // import { defineConfig } from "cypress";
// const { defineConfig } = require('cypress')
// require("dotenv").config();

// module.exports = defineConfig({
//   env: {
//     auth0_username: process.env.AUTH0_USERNAME,
//     auth0_password: process.env.AUTH0_PASSWORD,
//     auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
//     auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
//     // auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
//     auth0_client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
//     auth0_client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
