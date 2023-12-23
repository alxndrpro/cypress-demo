/// <reference types="Cypress" />

describe('Forms, Buttons & Checkbox', () => {


  it('Sumbit & Assert Form', () => {
    // Variables with data
    const name = 'George'
    const drink = 'Water'
    const color = 'Red'
    const email = 'george@test.com'
    const message = 'Message test'


    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[data-test="contact-form"]').should('be.visible')

    // Fill the form
    cy.get('#g1103-name').type('George')
    cy.contains('Water').click() 
    cy.contains('Red').click()  
    // cy.get('#g1103-whatisyourfavoritedrink-Water').check() - alternative way

    cy.get('#email').type('george@test.com')
    cy.get('#contact-form-comment-message').type('Message test')
    cy.contains('Submit').click()

    // Assert form details
    cy.get('.contact-form-submission').should('be.visible')
    cy.get('.field-value').contains('George').should('be.visible')
    cy.get('.field-value').contains('Water').should('be.visible')
    cy.get('.field-value').contains('Red').should('be.visible')
    cy.get('.field-value').contains('george@test.com').should('be.visible')
    cy.get('.field-value').contains('Message test').should('be.visible')

  })
})