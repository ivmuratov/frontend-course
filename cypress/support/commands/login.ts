import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';

export const login = (username = 'testuser', password = '123') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
  });
};
