describe('Navbar test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('Should type into searchbox and submit', () => {
		cy.get('#searchTerm').type('online {enter}')
	})

	it('Should show search result page', () => {
		cy.get('h2').contains('Search Results:')
		cy.get('.top_offset').contains(
			'The following pages were found for the query: online'
		)
		cy.get(':nth-child(4) > :nth-child(1) > a').contains(
			'Zero - Free Access to Online Banking'
		)
		cy.get(':nth-child(2) > a').contains('Zero - Online Statements')
	})

	it('Should display online banking content', () => {
		cy.contains('Online Banking').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible').should('contain', 'Online Banking')
		cy.get('.span6 > p')
			.should('be.visible')
			.should('contain', 'Pay bills easily')
		cy.get('h3').should(
			'contain',
			'Our Bank is trusted by over 1,000,000 customers world wide.'
		)
		cy.get('h3 > a').should('contain', 'Sign in')
		cy.get('h3').should('contain', 'now')
	})

	it('Should display feedback content', () => {
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
	})

	it('Should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')

		cy.get('.active > .custom > h4').should('contain', 'Online Banking')
	})
})
