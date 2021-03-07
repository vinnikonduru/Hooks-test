describe('My first Test', function(){

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Does not do much', function(){
    expect(true).to.equal(true)
  })
 
  it('Clicked on div', function(){
    cy.get('.testclick').click()
  })

  it('Button test',function(){
    cy.get('button').should('contain', 'button test')
  })

})