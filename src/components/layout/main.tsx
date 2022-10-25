import { Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export type MainProps = {
  layout?: 'default' | 'centered';
};

export const Main = (props: PropsWithChildren<MainProps>) => {
  const { layout, children } = props;
  let layoutProps = {};

  if (layout && layout === 'centered') {
    layoutProps = {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    };
  }

  return (
    <Stack flexGrow={1} flexBasis={'auto'} {...layoutProps}>
      {children}
    </Stack>
  );
};
