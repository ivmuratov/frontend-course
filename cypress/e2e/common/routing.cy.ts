import { selectByTestId } from '../helpers/selectByTestId';

describe('Routing', () => {
  describe('User unauthorized', () => {
    it('Go to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Go to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Go to non-existent route', () => {
      cy.visit('/12345');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Go to profile page', () => {
      cy.visit('/profile/4');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Go to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
