import { Button, ButtonProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';

export type LinkButtonProps = NextLinkProps & Omit<ButtonProps, 'as'>;

export const LinkButton = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  legacyBehavior,
  ...buttonProps
}: LinkButtonProps) => {
  return (
    <NextLink
      passHref
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <Button as="a" {...buttonProps} />
    </NextLink>
  );
};
