import clsx from 'clsx';
import { X } from 'phosphor-react';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { UIColor, UISize, UIVariant } from '../../types/types';
import { Box } from './box';
import { Button } from './button';

export type AlertProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant?: UIVariant;
  color?: UIColor;
  size?: UISize;
  closeable?: boolean;
  onClose?: () => void;
};

const alertClasses: any = {
  default:
    'inline-flex justify-center items-center gap-2 px-2 rounded-md border border-transparent',
  variants: {
    filled: {
      primary: 'bg-primary-500',
      light: 'bg-light-500',
      dark: 'bg-dark-500',
    },
    outlined: {
      primary: 'border-primary-500',
      light: 'border-light-500',
      dark: 'border-dark-500',
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

export const Alert = (props: PropsWithChildren<AlertProps>) => {
  const { variant, color, size, closeable, onClose, children, ...rest } = props;
  const [isClosed, setIsClosed] = useState(false);

  const classes = useMemo(() => {
    return twMerge(
      clsx(
        alertClasses.default,
        alertClasses.variants[variant || 'filled'][color || 'primary'],
        alertClasses.sizes[size || 'md'],
        props.className,
        isClosed && 'hidden'
      )
    );
  }, [variant, color, size, props.className, isClosed]);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <Box {...rest} className={classes} role="alert">
      <Box className={'flex-grow'}>{children}</Box>
      {closeable && (
        <Button
          variant={'transparent'}
          icon
          onClick={handleClose}
          aria-label={'close'}
        >
          <X />
        </Button>
      )}
    </Box>
  );
};
