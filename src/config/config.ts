import { Route } from '../types/types';
import { converToRoutes } from '../utils/utils';

export type Config = {
  app: {
    name: string;
    description?: string;
    url: string;
  };
  plausible: {
    enabled?: boolean;
    trackOutboundLinks?: boolean;
    selfHosted?: boolean;
    customDomain?: string;
    trackLocalhost?: boolean;
  };
  banner: {
    message?: string;
  };
  routes: {
    header: Route[];
    footer: Route[];
  };
};

export const config: Config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'App',
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_APP_URL || '/',
  },
  plausible: {
    enabled: Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED),
    trackOutboundLinks: Boolean(process.env.NEXT_PUBLIC_TRACK_OUTBOUND_LINKS),
    selfHosted: Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_SELF_HOSTED),
    customDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM_DOMAIN,
    trackLocalhost: Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_TRACK_LOCALHOST),
  },
  banner: {
    message: process.env.NEXT_PUBLIC_BANNER_MESSAGE,
  },
  routes: {
    header: process.env.NEXT_PUBLIC_HEADER_ROUTES
      ? converToRoutes(process.env.NEXT_PUBLIC_HEADER_ROUTES)
      : [],
    footer: process.env.NEXT_PUBLIC_FOOTER_ROUTES
      ? converToRoutes(process.env.NEXT_PUBLIC_FOOTER_ROUTES)
      : [],
  },
};
