import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { usePlausible } from 'next-plausible';
import useTranslation from 'next-translate/useTranslation';
import { Moon, Sun } from 'phosphor-react';

import { Optional } from '../types/types';

export const DarkModeSwitch = (
  props: Optional<IconButtonProps, 'aria-label'>
) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const plausible = usePlausible();
  const { t } = useTranslation();

  return (
    <Tooltip title={t('common:darkMode')}>
      <IconButton
        aria-label={t('common:darkMode')}
        variant={'ghost'}
        onClick={() => {
          toggleColorMode();
          plausible('click', {
            props: {
              id: 'dark-mode-switch',
            },
          });
        }}
        icon={colorMode === 'light' ? <Moon /> : <Sun />}
        {...props}
      />
    </Tooltip>
  );
};
