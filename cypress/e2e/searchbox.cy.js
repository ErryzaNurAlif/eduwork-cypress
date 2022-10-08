describe('Searchbox Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('Should type into searchbox and submit', () => {
		cy.get('#searchTerm').type('online {enter}')
	})
	it('Should show search result page', () => {
		cy.get('h2').contains('Search Results:')
	})
	it('Assertion result page', () => {
		cy.get('.top_offset').contains(
			'The following pages were found for the query: online'
		)
		cy.get(':nth-child(4) > :nth-child(1) > a').contains(
			'Zero - Free Access to Online Banking'
		)
		cy.get(':nth-child(2) > a').contains('Zero - Online Statements')
	})
	it('Clicking navigates to a new url online banking', () => {
		cy.get(':nth-child(4) > :nth-child(1) > a').click()

		cy.url().should('include', '/online-banking.html')
	})
})
