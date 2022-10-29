import { PropsWithChildren } from 'react';

import { Box } from '../ui/box';
import ErrorBoundary from '../ui/error-boundary';
import { Banner } from './banner';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => (
  <Box className={'min-h-screen flex flex-col'}>
    <Banner />
    <Header />
    <Box className={'flex flex-grow'}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Box>
    <Footer />
  </Box>
);
