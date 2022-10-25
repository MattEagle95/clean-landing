import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';

export type LinkProps = NextLinkProps & Omit<ChakraLinkProps, 'as'>;

export const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  legacyBehavior,
  ...chakraProps
}: LinkProps) => {
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
      <ChakraLink
        transition="none"
        _hover={{ textDecoration: 'none' }}
        {...chakraProps}
      />
    </NextLink>
  );
};
