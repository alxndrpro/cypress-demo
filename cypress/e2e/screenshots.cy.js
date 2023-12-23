/// <reference types="Cypress" />

describe('Cypress Screenshots', () => {
  it('Full page screenshot', () => {
    cy.visit('https://practice-automation.com/')
    cy.screenshot({overwrite : true})
  })

  it('Single element screenshot', () => {
      cy.visit('https://example.com/') 
      cy.get('h1').screenshot({overwrite : true})
    })

})