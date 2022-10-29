import { usePlausible } from 'next-plausible';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

import { Box } from '../components/ui/box';
import { Heading } from '../components/ui/heading';
import { LinkButton } from '../components/ui/link-button';
import { Main } from '../components/ui/main';
import { Text } from '../components/ui/text';
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
    <Main layout={'centered'} className={'gap-4'}>
      <NextSeo
        title={t('notFound:title')}
        description={t('notFound:subTitle')}
      />

      <Box className={'flex flex-col gap-2'}>
        <Heading className={'font-bold'}>{t('notFound:title')}</Heading>

        <Text className={'text-neutral-500'}>
          {t('notFound:subTitle')}
        </Text>
      </Box>

      <LinkButton href={config.app.url} color={'adaptive'}>{t('common:home')}</LinkButton>
    </Main>
  );
}
