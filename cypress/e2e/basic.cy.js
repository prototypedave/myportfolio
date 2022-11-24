describe('sample test', () => {
  beforeEach(() => {
    cy.visit('http://www.davidisumba.site')
  })
  
  it("should render the home page and display a message", () => {
    cy.get("h3").contains("David Isumba");
  });

  it('renders the Netlify logo image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
