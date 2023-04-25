import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchemaKey,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchemaKey,
};
