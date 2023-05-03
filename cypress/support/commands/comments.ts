import { User } from '../../../src/entities/User';

export const addComment = (text = 'text') => {
  cy.getByTestId('AddCommentForm.Input').type(text);
  cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text?: string): Chainable<User>;
    }
  }
}
