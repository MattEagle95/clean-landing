import clsx from 'clsx';
import { PropsWithChildren, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Box, BoxProps } from './box';

export type ContainerProps = BoxProps;

export const containerClasses: any = {
  default: 'container mx-auto',
};

export const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, ...rest } = props;

  const classes = useMemo(() => {
    return twMerge(clsx(containerClasses.default, props.className));
  }, [props.className]);

  return (
    <Box {...rest} className={classes}>
      {children}
    </Box>
  );
};
