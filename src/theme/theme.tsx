import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const breakpoints = {
  xl: '70em',
  'container.xl': '70em',
};

interface ThemeConfig {
  useSystemColorMode?: boolean;
  initialColorMode: 'light' | 'dark';
}

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'light',
};

const fonts = {
  heading: `'InterVariable', sans-serif`,
  body: `'InterVariable', sans-serif`,
};

const colors = {
  neutral: {
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('neutral.900', 'neutral.100')(props),
      bg: mode('neutral.100', 'neutral.900')(props),
    },
    'html, body, #__next': {
      height: '100vh',
    },
    '*::-webkit-scrollbar': {
      width: props.theme.space[2],
    },
    '*::-webkit-scrollbar-track': {
      background: mode('neutral.200', 'neutral.600')(props),
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: mode('neutral.600', 'neutral.800')(props),
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: mode('neutral.400', 'neutral.500')(props),
    },
  }),
};

export const theme = extendTheme(
  {
    breakpoints,
    config,
    fonts,
    colors,
    styles,
  },
  withProse()
);

export default theme;
