import Link from 'next/link';
import { useRouter } from 'next/router';

import { config } from '../../config/config';
import { Route } from '../../types/types';
import { Container } from '../ui/container';

export function Footer() {
  const router = useRouter();

  const onClickHidden = async (route: Route) => {
    if (route.blank) {
      window.open(route.href, '_ blank');
      return;
    }

    await router.push(route.href);
  };

  return (
    <footer className={'py-2'}>
      <Container className={'flex justify-between items-center'}>
        <Link href={config.app.url}>{config.app.name}</Link>

        <div className="flex gap-2">
          {config.routes.footer.map((route) => (
            <Link
              key={route.title}
              href={route.hidden ? '#' : route.href}
              target={route.blank ? '_blank' : undefined}
              rel={route.blank ? 'noreferrer' : undefined}
              onClick={route.hidden ? () => onClickHidden(route) : undefined}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
