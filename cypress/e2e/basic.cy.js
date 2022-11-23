describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('SectionText#cyt')
    .contains('Solving tech problems is my passion, have a look at some of my projects below');
  })
})
