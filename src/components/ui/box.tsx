import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

export type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Box = (props: PropsWithChildren<BoxProps>) => {
  const { children, ...rest } = props;

  const classes = useMemo(() => {
    return twMerge(props.className);
  }, [props.className]);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
