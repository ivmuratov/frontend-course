export const updateProfile = (firstname = 'new firstname', lastname = 'new lastname') => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8080/profile/${profileId}`,
  headers: {
    Authorization: '12345',
  },
  body: {
    id: '4',
    first: 'Test',
    lastname: 'User',
    age: 1000,
    currency: 'RUB',
    country: 'Russia',
    city: 'Moscow',
    username: 'testuser',
    avatar: 'unknown',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname?: string, lastname?: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
