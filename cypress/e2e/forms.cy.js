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
    cy.getByTestData('contact-form').should('be.visible')


    // Fill the form
    cy.getById('g1103-name').type(name)
    cy.contains(drink).click() 
    cy.contains(color).click()  
    // cy.get('#g1103-whatisyourfavoritedrink-Water').check() - an alternative way
    cy.getById('email').type(email)
    cy.getById('contact-form-comment-message').type(message)
    cy.contains('Submit').click()

    // Assert form details
    cy.get('.contact-form-submission').should('be.visible')
    cy.get('.field-value').contains(name).should('be.visible')
    cy.get('.field-value').contains(drink).should('be.visible')
    cy.get('.field-value').contains(color).should('be.visible')
    cy.get('.field-value').contains(email).should('be.visible')
    cy.get('.field-value').contains(message).should('be.visible')

  })
})