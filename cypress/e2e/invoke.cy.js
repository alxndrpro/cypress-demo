/// <reference types="Cypress" />


describe('Execute JavaScript code inside Cypress', () => {
    it('Invoke calculation of numbers', () => {
        const fn = (a,b,c) => {
            return a+b+c
        }

        cy.wrap({sum: fn}).invoke('sum', 2, 4, 8).should('be.greaterThan', 10).and('be.lessThan', 16)


    })
  })