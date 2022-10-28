import clsx from 'clsx';
import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';
import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  forwardRef,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { UIColor, UISize, UIVariant } from '../../types/types';
import { buttonClasses } from './button';

export type LinkButtonProps = LinkProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    variant?: UIVariant;
    color?: UIColor;
    size?: UISize;
    icon?: boolean;
  };

export const linkButtonClasses: any = buttonClasses;

// eslint-disable-next-line react/display-name
export const LinkButton = forwardRef(
  (props: PropsWithChildren<LinkButtonProps>, ref: any) => {
    const { variant, color, size, icon, children, ...rest } = props;

    const classes = useMemo(() => {
      return twMerge(
        clsx(
          linkButtonClasses.default,
          linkButtonClasses.variants[variant || 'filled'][color || 'primary'],
          linkButtonClasses.sizes[size || 'md'],
          icon && 'px-3',
          props.className
        )
      );
    }, [variant, color, size, icon, props.className]);

    return (
      <Link ref={ref} {...rest} className={classes}>
        {children}
      </Link>
    );
  }
);
