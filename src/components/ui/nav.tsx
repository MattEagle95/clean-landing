import { PropsWithChildren } from 'react';

export const Nav = (props: PropsWithChildren<any>) => {
  const { children } = props;

  return (
    <nav className={'flex flex-grow justify-between items-center gap-2'}>
      {children}
    </nav>
  );
};
