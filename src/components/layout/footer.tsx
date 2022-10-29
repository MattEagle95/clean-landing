import Link from 'next/link';

import { config } from '../../config/config';
import { Container } from '../ui/container';
import { Nav } from '../ui/nav';
import { NavMenu } from '../ui/nav-menu';

export function Footer() {
  return (
    <footer className={'py-2'}>
      <Container>
        <Nav>
          {config.footer.title ? (
            <Link href={config.app.url}>{config.footer.title}</Link>
          ) : (
            <div />
          )}

          <NavMenu routes={config.footer.routes} />
        </Nav>
      </Container>
    </footer>
  );
}
