/// <reference types="Cypress" />

describe('Cypress hover', () => {
  it('Lets test hover workaround', () => {
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain', 'You did it!')
  })
})