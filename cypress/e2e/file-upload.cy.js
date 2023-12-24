/// <reference types="Cypress" />


describe('Cypress Files Upload', () => {
  it('Should upload JSON example file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.getById('file-upload').selectFile('cypress/fixtures/example.json')
    cy.getById('file-submit').click()
    cy.get('h3').should('be.visible')
  })
})