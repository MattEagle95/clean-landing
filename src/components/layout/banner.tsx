import { config } from '../../config/config';
import { Alert } from '../ui/alert';
import { Box } from '../ui/box';
import { Container } from '../ui/container';

export const Banner = () => {
  if (!config.banner.message) {
    return <></>;
  }

  return (
    <Box className={'w-full bg-primary-500'}>
      <Container>
        <Alert
          variant={'transparent'}
          className={'w-full rounded-none px-0'}
          closeable
        >
          {config.banner.message}
        </Alert>
      </Container>
    </Box>
  );
};
