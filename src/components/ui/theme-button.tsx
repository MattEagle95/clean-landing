import { useTheme } from 'next-themes';
import useTranslation from 'next-translate/useTranslation';
import { Moon, Sun } from 'phosphor-react';
import { forwardRef, useEffect, useState } from 'react';

import { Button, ButtonProps } from './button';

// eslint-disable-next-line react/display-name
export const ThemeButton = forwardRef((props: ButtonProps, ref: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Button
      ref={ref}
      aria-label={t('common:toggleTheme')}
      variant={'transparent'}
      icon
      onClick={toggleTheme}
      {...props}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
});
