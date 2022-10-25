import { Container, Stack } from '@chakra-ui/react';

import { DarkModeSwitch } from '../dark-mode-switch';

export function Header() {
  return (
    <Container as={Stack} maxW={'6xl'} py={4} alignItems={'end'}>
      <DarkModeSwitch />
    </Container>
  );
}
