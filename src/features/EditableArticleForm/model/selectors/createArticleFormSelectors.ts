import { StateSchema } from '@/app/providers/StoreProvider';

export const getCreateArticleFormTitle = (state: StateSchema) => state.createArticleForm?.form.title ?? '';

export const getCreateArticleFormSubtitle = (state: StateSchema) => state.createArticleForm?.form.subtitle ?? '';

export const getCreateArticleFormImg = (state: StateSchema) => state.createArticleForm?.form.img ?? '';

export const getCreateArticleFormType = (state: StateSchema) => state.createArticleForm?.form.type ?? [];

export const getCreateArticleFormBlocks = (state: StateSchema) => state.createArticleForm?.form.blocks ?? [];

export const getCreateArticleFormBlockById = (id: number) => (state: StateSchema) => state.createArticleForm?.form.blocks[id];

export const getCreateArticleFormCheckTypeIT = (state: StateSchema) => state.createArticleForm?.form.checkTypeIT ?? false;

export const getCreateArticleFormCheckTypeScience = (state: StateSchema) =>
  state.createArticleForm?.form.checkTypeScience ?? false;

export const getCreateArticleFormCheckTypeEconomics = (state: StateSchema) =>
  state.createArticleForm?.form.checkTypeEconomics ?? false;

export const getCreateArticleFormIsLoading = (state: StateSchema) => state.createArticleForm?.isLoading;

export const getCreateArticleFormError = (state: StateSchema) => state.createArticleForm?.error;
