import { Heading, Stack, Text } from '@chakra-ui/react';
import { usePlausible } from 'next-plausible';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

import { Main } from '../components/layout/main';
import { LinkButton } from '../components/link-button';
import { config } from '../config/config';

export default function NotFound() {
  const { t } = useTranslation();
  const plausible = usePlausible();

  useEffect(() => {
    plausible('404', {
      props: { path: document ? document.location.pathname : '/' },
    });
  }, [plausible]);

  return (
    <Main layout={'centered'}>
      <NextSeo
        title={t('notFound:title')}
        description={t('notFound:subTitle')}
      />
      <Stack>
        <Heading>{t('notFound:title')}</Heading>
        <Text>{t('notFound:subTitle')}</Text>
      </Stack>
      <LinkButton href={config.routes.home.href} variant="outline">
        {t('routes:' + config.routes.home.name)}
      </LinkButton>
    </Main>
  );
}
