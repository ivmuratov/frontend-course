import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export default lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // для теста
  setTimeout(() => resolve(import('./AddCommentForm')), 1000);
}));
