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

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: UISize;
};

export const textClasses: any = {
  ...uiClasses,
};

export const Text = (props: PropsWithChildren<TextProps>) => {
  const { size, children, ...rest } = props;

  const classes = useMemo(() => {
    return twMerge(clsx(textClasses.sizes[size || 'md'], props.className));
  }, [size, props.className]);

  return (
    <p {...rest} className={classes}>
      {children}
    </p>
  );
};
