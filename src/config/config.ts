export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'App',
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_APP_URL || '/',
  },
  links: [
    {
      title: 'asdasd',
      href: '/',
      color: 'green',
    },
    {
      title: 'fsdfsf',
      href: '/',
      color: 'blue',
    },
    {
      title: 'wefwfwe',
      href: '/',
      variant: 'outline',
    },
    {
      title: 'sssssssss',
      href: '/',
      color: 'red',
      variant: 'link',
    },
  ],
  routes: {
    home: {
      name: 'home',
      href: '/',
    },
    contact: {
      name: 'contact',
      href: 'mailto:',
    },
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
};
