import { Heading, Stack, Text, VStack } from '@chakra-ui/react';

import { Main } from '../components/layout/main';
import { LinkButton } from '../components/link-button';
import { config } from '../config/config';

export default function Index() {
  return (
    <Main>
      <Stack>
        <Heading fontSize={'6xl'}>{config.app.name}</Heading>
        {config.app.description && <Text>{config.app.description}</Text>}
        {config.links.length > 0 && (
          <VStack pt={4}>
            {config.links.map((link, i) => (
              <LinkButton
                key={i}
                href={link.href}
                variant={link.variant}
                colorScheme={link.color}
                w={'100%'}
              >
                {link.title}
              </LinkButton>
            ))}
          </VStack>
        )}
      </Stack>
    </Main>
  );
}
