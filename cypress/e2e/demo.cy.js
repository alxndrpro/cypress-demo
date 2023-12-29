/// <reference types="Cypress" />

import ExamplePage from "../pages/ExamplePage"


describe('Cypress E2E testing demo', () => {
  
  const examplePage = new ExamplePage()

  beforeEach(() => {
    examplePage.openExamplePage()
  })

  afterEach(() => {
    cy.log('Running after each of my tests')
  })

  it('Assert URL & Title', () => {
    examplePage.assertUrl()
    examplePage.assertTitle()
  })

  it('Assert Element', {retries: 3}, () => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

  it('Reload and Logs', () => {
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')

  }) 

})