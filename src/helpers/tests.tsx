import { FC, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render };
