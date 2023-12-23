/// <reference types="Cypress" />

describe('Cypress Files', () => {
  it('Read/Write into JSON file', () => {
    cy.writeFile('test-data/data.json', {name : 'George', email : 'george@test.com'})
    cy.readFile('test-data/data.json').then((user) => {
      expect(user.name).to.equal('George')
      expect(user.email).to.equal('george@test.com')
    })
  })
  
  it('Write into plain text file', () => {
    cy.writeFile('test-data/plain.txt', 'Hello World', 'ASCII')
  })

})