let profileId: string;

describe('User visits the profile page', () => {
  beforeEach(() => {
    cy.login().then(data => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Profile page loading successfully', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
  });

  it('Edit profile page', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'new firstname');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'new lastname');
  });
});

export {};
