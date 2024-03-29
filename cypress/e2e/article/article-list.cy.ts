describe('User visits the article list page', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('articles');
    });
  });

  it('Article list loading successfully', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });

  it('Fixtures. Article list loading successfully', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });
});

export {};
