import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { config } from '../../config/config';
import { Container } from '../ui/container';
import { Nav } from '../ui/nav';
import { NavMenu } from '../ui/nav-menu';
import { ThemeButton } from '../ui/theme-button';
import Tooltip from '../ui/tooltip';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className={'py-2'}>
      <Container>
        <Nav>
          {config.header.title ? (
            <Link href={config.app.url}>{config.header.title}</Link>
          ) : (
            <div />
          )}

          <div className={'flex justify-between items-center'}>
            <NavMenu routes={config.header.routes} />

            <Tooltip title={t('common:toggleTheme')}>
              <ThemeButton />
            </Tooltip>
          </div>
        </Nav>
      </Container>
    </header>
  );
}
