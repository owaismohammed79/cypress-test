describe('template spec', () => {
  it('renders the DOM element H1 on the screen', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-title"]').should('exist') //here data-testid is given by us
    .should('have.text', 'Vite + React');
  })

  it('renders the todos on the screen', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="todo-1"]').should('exist')
  })

  it('clicks the button on the screen', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('count is 0').click()
  })

  it('clicks the Vite logo on the screen', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="vite-link"]').click()
    cy.origin('https://vite.dev', () => { //If there is a redirect we need to change the origin...
      cy.get('.DocSearch-Button').click()
      cy.get('#docsearch-input').type('react') //Typing into a search bar
    })
    
  })

})