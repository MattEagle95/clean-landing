import { Box, Container, Text } from '@chakra-ui/react';

import { config } from '../../config/config';

export const Banner = () => {
  if (!config.banner.message) {
    return <></>;
  }

  return (
    <Box bgColor={'teal.500'} py={2}>
      <Container
        display={'flex'}
        maxW={'container.xl'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontWeight={'bold'}>{config.banner.message}</Text>
      </Container>
    </Box>
  );
};
