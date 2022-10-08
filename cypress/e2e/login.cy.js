describe('Login page', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})

	it('Should try to login with invalid data', () => {
		cy.fixture('user_invalid').then(user => {
			const username = user.username
			const password = user.password

			cy.login(username, password)
		})
	})

	it('Should display error message', () => {
		// Alert error message
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})

	it('Should login to application with valid data', () => {
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.login(username, password)
		})

		// Checking url setelah login benar url account
		cy.url().should(
			'eq',
			'http://zero.webappsecurity.com/bank/account-summary.html'
		)

		// Checking navbar
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('Should logout from the aplication', () => {
		cy.logout()
	})
})
