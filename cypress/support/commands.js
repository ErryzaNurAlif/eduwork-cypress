// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	// Input username
	cy.get("input[id='user_login']").clear()
	cy.get("input[id='user_login']").type(username)

	// Input password
	cy.get("input[id='user_password']").clear()
	cy.get("input[id='user_password']").type(password)

	// Clicking keep me signed in
	cy.get("input[id='user_remember_me']")
		.not('[disabled]')
		.check()
		.should('be.checked')

	// Clicking sign in
	cy.get("input[name='submit']").click()
})

Cypress.Commands.add('logout', () => {
	// Checking elements navbar user profile
	cy.get(':nth-child(3) > .dropdown-toggle').should('be.visible')

	// Cliking user profile
	cy.get(':nth-child(3) > .dropdown-toggle').click()

	// Checking elements logout
	cy.get('#logout_link').should('be.visible')

	// Cliking for logout
	cy.get('#logout_link').click()
})

Cypress.Commands.add('loginsaucedemo', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	// Input username
	cy.get("input[id='user-name']").clear()
	cy.get("input[id='user-name']").type(username)

	// Input password
	cy.get("input[id='password']").clear()
	cy.get("input[id='password']").type(password)

	// Clicking button login
	cy.get("input[id='login-button']").click()
})

// Cypress.Commands.add('selectproduct', productname => {
// 	cy.get('.inventory_item_name').each(($el, index) => {
// 		if ($el.text().includes(productname)) {
// 			// Clicking add to cart
// 			cy.get("button[id='add-to-cart-sauce-labs-bike-light']").eq(index).click()
// 		}
// 	})
// })
