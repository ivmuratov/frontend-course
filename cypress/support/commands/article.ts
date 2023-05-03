import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Статья для теста',
  subtitle: 'Тест',
  img: 'https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/yp/images/biology.jpg?itok=kvBgR9VY',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'SCIENCE',
  ],
  blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8080/articles',
  headers: {
    Authorization: '12345',
  },
  body: article ?? defaultArticle,
}).then(({ body }) => body);

export const removeArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8080/articles/${articleId}`,
  headers: {
    Authorization: '12345',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
