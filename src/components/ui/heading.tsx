import clsx from 'clsx';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { UISize } from '../../types/types';
import { uiClasses } from '../../utils/utils';

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: UISize;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const headingClasses: any = {
  ...uiClasses,
};

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  const { size, as, children, ...rest } = props;

  const classes = useMemo(() => {
    return twMerge(clsx(headingClasses.sizes[size || '4xl'], props.className));
  }, [size, props.className]);

  switch (as) {
    case 'h1':
      return (
        <h1 {...rest} className={classes}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...rest} className={classes}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...rest} className={classes}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...rest} className={classes}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...rest} className={classes}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...rest} className={classes}>
          {children}
        </h6>
      );
  }

  return (
    <h1 {...rest} className={classes}>
      {children}
    </h1>
  );
};
