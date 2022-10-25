import { Container, Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import ErrorBoundary from '../error-boundary';
import { Banner } from './banner';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => (
  <Flex flexDir={'column'} minHeight={'100vh'}>
    <Banner />
    <Header />
    <Container
      display={'flex'}
      flexDir={'column'}
      flexGrow={1}
      maxW={'container.xl'}
    >
      <ErrorBoundary
        statusAlertProps={{
          justifySelf: 'center',
          alignSelf: 'center',
        }}
      >
        {children}
      </ErrorBoundary>
    </Container>
    <Footer />
  </Flex>
);
