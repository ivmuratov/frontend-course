import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { ComponentType, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

export function withDynamicModuleLoader<T>(
  Child: ComponentType<T>,
  reducers: ReducersList,
  removeAfterUnmount: boolean = true,
) {
  return (hocProps: T & JSX.IntrinsicAttributes) => {
    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useDispatch();

    useEffect(() => {
      const mountedReducers = store.reducerManager.getMountedReducers();
      Object.entries(reducers).forEach(([name, reducer]) => {
        const mounted = mountedReducers[name as StateSchemaKey];
        if (!mounted) {
          store.reducerManager.add(name as StateSchemaKey, reducer);
          dispatch({ type: `@INIT ${name} reducer` });
        }
      });

      return () => {
        if (removeAfterUnmount) {
          Object.entries(reducers).forEach(([name]) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          });
        }
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Child {...hocProps} />;
  };
}
