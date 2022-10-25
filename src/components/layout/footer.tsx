import {
  Box,
  Link as ChakraLink,
  Container,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { config } from '../../config/config';
import { Link } from '../link';

export function Footer() {
  const router = useRouter();
  const onClickContact = async () => {
    await router.push('mailto:colin@amalotia.com');
  };

  return (
    <Box>
      <Container
        as={HStack}
        maxW={'6xl'}
        py={4}
        justify={'space-between'}
        alignItems={'space-between'}
      >
        <Stack>
          <Link href={'/'}>{config.app.name}</Link>
        </Stack>
        <Stack>
          <HStack>
            <ChakraLink
              href={'#'}
              transition="none"
              _hover={{ textDecoration: 'none' }}
              onClick={onClickContact}
            >
              Contact
            </ChakraLink>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
