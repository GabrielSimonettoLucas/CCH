describe('abrir home page', () => {

  const pesquisa1 = 'Marmota';
  const pesquisa2 = 'Noodle';
  const pesquisa3 = 'Trabajo';

  it('passes', () => {
    
    cy.visit('https://wikipedia.org')
    cy.title().should('include', 'Wikipedia');
    cy.get('#js-link-box-pt').click();
    cy.contains('Boas-vindas à Wikipédia').should('be.visible');

    cy.wait(1000)
    cy.get('#searchInput').should('be.visible').type(pesquisa1);
    cy.get('#searchInput').should('be.visible').type('{enter}');
    cy.title().should('include', pesquisa1);
    cy.visit('https://wikipedia.org')
    cy.title().should('include', 'Wikipedia');
    cy.get('#js-link-box-en').click();
    cy.contains('Welcome to Wikipedia').should('be.visible');
    
    cy.wait(1000)
    cy.get('#searchInput').should('be.visible').type(pesquisa2);
    cy.get('#searchInput').should('be.visible').type('{enter}');
    cy.title().should('include', pesquisa2);
    cy.visit('https://wikipedia.org')
    cy.title().should('include', 'Wikipedia');
    cy.get('#js-link-box-es').click();
    cy.contains('Bienvenidos a Wikipedia').should('be.visible');
    
    cy.wait(1000)
    cy.get('#searchInput').should('be.visible').type(pesquisa3);
    cy.get('#searchInput').should('be.visible').type('{enter}');
    cy.title().should('include', pesquisa3);
    cy.visit('https://wikipedia.org')
    cy.title().should('include', 'Wikipedia');
  })
})