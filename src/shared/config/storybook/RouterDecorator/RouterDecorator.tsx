import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default (story: () => Story) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
);
