import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>
}

export const componentRender = (
  component: ReactNode,
  { route = '/', initialState }: ComponentRenderOptions = {},
) => render(
  <MemoryRouter initialEntries={[route]}>
    <StoreProvider initialState={initialState}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </StoreProvider>
  </MemoryRouter>,
);
