import clsx from 'clsx';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  forwardRef,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { UIColor, UISize, UIVariant } from '../../types/types';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: UIVariant;
  color?: UIColor;
  size?: UISize;
  icon?: boolean;
};

export const buttonClasses: any = {
  default:
    'inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-md disabled:cursor-auto border border-transparent',
  variants: {
    filled: {
      primary:
        'bg-primary-500 hover:bg-primary-700 disabled:bg-primary-900 disabled:hover:bg-primary-900 active:bg-primary-600',
      light:
        'bg-light-500 hover:bg-light-700 disabled:bg-light-900 disabled:hover:bg-light-900 active:bg-light-600',
      dark: 'bg-dark-500 hover:bg-dark-700 disabled:bg-dark-900 disabled:hover:bg-dark-900 active:bg-dark-600',
      adaptive:
        'bg-dark-500 hover:bg-dark-700 disabled:bg-dark-900 disabled:hover:bg-dark-900 active:bg-dark-600' +
        'dark:bg-light-500 dark:hover:bg-light-700 dark:disabled:bg-light-900 dark:disabled:hover:bg-light-900 dark:active:bg-light-600',
    },
    outlined: {
      primary:
        'border-primary-500 hover:border-primary-700 disabled:border-primary-900 disabled:hover:border-primary-900 active:border-primary-600',
      light:
        'border-light-500 hover:border-light-700 disabled:border-light-900 disabled:hover:border-light-900 active:border-light-600',
      dark: 'border-dark-500 hover:border-dark-700 disabled:border-dark-900 disabled:hover:border-dark-900 active:border-dark-600',
      adaptive:
        'border-dark-500 hover:border-dark-700 disabled:border-dark-900 disabled:hover:border-dark-900 active:border-dark-600' +
        'dark:border-light-500 dark:hover:border-light-700 dark:disabled:border-light-900 dark:disabled:hover:border-light-900 dark:active:border-light-600',
    },
    transparent: {
      primary: 'bg-transparent border-transparent',
      light: 'bg-transparent border-transparent',
      dark: 'bg-transparent border-transparent',
      adaptive: 'bg-transparent border-transparent',
    },
  },
  sizes: {
    sm: 'h-8 text-xs',
    md: 'h-10 text-md',
    lg: 'h-12 text-lg',
  },
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (props: PropsWithChildren<ButtonProps>, ref: any) => {
    const { variant, color, size, icon, children, ...rest } = props;

    const classes = useMemo(() => {
      return twMerge(
        clsx(
          buttonClasses.default,
          buttonClasses.variants[variant || 'filled'][color || 'primary'],
          buttonClasses.sizes[size || 'md'],
          icon && 'px-3',
          props.className
        )
      );
    }, [variant, color, size, icon, props.className]);

    return (
      <button ref={ref} {...rest} className={classes}>
        {children}
      </button>
    );
  }
);
