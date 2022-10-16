describe('test for help faqs page', () => {
beforeEach(()=>{
  cy.visit('http://localhost:4200');
  cy.get('h1').contains('HAVE A QUESTION? WE CAN HELP');
})

  it('sould display the questions and hide the content', () => {
    cy.fixture('faqs.json').then((data) => {
      cy.get('li')
        .should('have.length', data.length)
        .each(($el:any, index) => {
          cy.get($el).children('.accordion__header').children('.question__container').children('.question').should('have.text',data[index].question);
          cy.get($el).children('.accordian__content').should('not.exist')
        });
    });
  });

  it('should display and hide the content on mutiple click of the same question',()=>{
    cy.fixture('faqs.json').then((data) => {
      cy.get('li').each(($el:any,index)=>{
        cy.get($el).click();
        cy.get($el).children('.accordian__content').children('p').should('be.visible')
        cy.get($el).children('.accordian__content').children('p').should('have.text',data[index].answer)
        cy.get($el).click();
        cy.get($el).children('.accordian__content').should('not.exist')
      })
    })
  })
});
