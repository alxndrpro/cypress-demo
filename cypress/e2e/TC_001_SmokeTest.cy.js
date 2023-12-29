/// <reference types="Cypress" />

describe('TC_001_Smoke_Test', () => {

    it('Should load home page', () => {
      cy.visit('https://demoblaze.com/index.html')
        cy.get('.navbar-brand').should('be.visible')
        cy.get('#navbarExample').should('be.visible')

        cy.get('#cat').should('be.visible')
        
        cy.get('#fotcont').should('be.visibleclear')
    })
  })