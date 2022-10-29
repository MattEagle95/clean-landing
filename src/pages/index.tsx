import { Heading } from '../components/ui/heading';
import { Main } from '../components/ui/main';
import { Text } from '../components/ui/text';
import { config } from '../config/config';

export default function Home() {
  return (
    <Main layout={'centered'} className={'gap-2'}>
      <Heading className={'font-bold'}>{config.app.name}</Heading>

      {config.app.description && (
        <Text className={'text-neutral-600 dark:text-neutral-400'}>
          {config.app.description}
        </Text>
      )}
    </Main>
  );
}
