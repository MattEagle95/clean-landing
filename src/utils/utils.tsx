import { Route } from '../types/types';

export const uiClasses: any = {
  sizes: {
    sm: 'text-xs',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
  },
};

export const converToRoutes = (value: string): Route[] => {
  return value.split(',').map((route) => {
    const split = route.split(';');
    return {
      title: split[0],
      href: split[1],
      blank: Boolean(Number(split[2]) || false),
      hidden: Boolean(Number(split[3]) || false),
    };
  });
};
