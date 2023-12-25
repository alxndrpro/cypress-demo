/// <reference types="Cypress" />


describe('Cypress Clearing Inputs', () => {
    it('Type & Clear', () => {
      cy.visit('https://practice-automation.com/form-fields/')
      cy.getById('g1103-name').type('12345')
      cy.wait(2000)
      cy.getById('g1103-name').clear().type('new text')
    })
  })