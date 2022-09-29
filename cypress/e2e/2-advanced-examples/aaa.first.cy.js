context('My first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
  })

  it('has action title on the page', () => {
    cy.get('.container').eq(1)
      .find('p')
      .should('contain.text', 'Actions')
  })
})
