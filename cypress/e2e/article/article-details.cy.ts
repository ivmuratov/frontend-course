let currentArticleId: string;

describe('User visits the article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(data => {
      currentArticleId = data.id;
      cy.visit(`articles/${data.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Article details', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('Article recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Add comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('Add rate', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});

export {};
