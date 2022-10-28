import clsx from 'clsx';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

export type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  layout?: 'default' | 'centered';
};

export const mainClasses: any = {
  default: 'container mx-auto flex flex-col flex-grow',
  centered: 'justify-center items-center text-center',
};

export const Main = (props: PropsWithChildren<MainProps>) => {
  const { layout, children, ...rest } = props;

  const classes = useMemo(() => {
    return twMerge(
      clsx(
        mainClasses.default,
        layout && layout === 'centered' && mainClasses.centered,
        props.className
      )
    );
  }, [layout, props.className]);

  return (
    <main {...rest} className={classes}>
      {children}
    </main>
  );
};
