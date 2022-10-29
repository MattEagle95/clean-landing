import Link from 'next/link';

import { config } from '../../config/config';
import { Container } from '../ui/container';
import { Nav } from '../ui/nav';
import { NavMenu } from '../ui/nav-menu';
import { ThemeButton } from '../ui/theme-button';

export function Header() {
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

            <ThemeButton />
          </div>
        </Nav>
      </Container>
    </header>
  );
}
