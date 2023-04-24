import AddCommentFormAsync from './ui/AddCommentForm/AddCommentForm.async';
import { addCommentFormReducer } from '../AddCommentForm/model/slice/addCommentFormSlice';
import type { AddCommentFormSchema } from './model/types/addCommentForm';

export {
  AddCommentFormAsync as AddCommentForm,
  addCommentFormReducer,
  AddCommentFormSchema,
};
