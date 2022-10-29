import Link from 'next/link';
import { useRouter } from 'next/router';

import { Route } from '../../types/types';

export type NavMenuProps = {
  routes: Route[];
};

export const NavMenu = (props: NavMenuProps) => {
  const { routes } = props;
  const router = useRouter();

  const onClickHidden = async (route: Route) => {
    if (route.blank) {
      window.open(route.href, '_blank');
      return;
    }

    await router.push(route.href);
  };

  return (
    <div className="flex gap-2">
      {routes.map((route) => (
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
  );
};
