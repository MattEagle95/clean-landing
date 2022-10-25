import '@fontsource/inter/variable.css';

import { ChakraProvider } from '@chakra-ui/provider';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { IconContext } from 'phosphor-react';
import React from 'react';

import { Layout } from '../components/layout/layout';
import { config } from '../config/config';
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation();

  return (
    <PlausibleProvider
      domain={config.app.url.replace('http://', '').replace('https://', '')}
      enabled={config.plausible.enabled}
      trackOutboundLinks={config.plausible.trackOutboundLinks}
      selfHosted={config.plausible.selfHosted}
      trackLocalhost={config.plausible.trackLocalhost}
    >
      <ChakraProvider resetCSS theme={theme}>
        <IconContext.Provider
          value={{
            size: 20,
            weight: 'bold',
          }}
        >
          <Head>
            <meta
              name={'viewport'}
              content={
                'width=device-width, initial-scale=1, viewport-fit=cover'
              }
            />
          </Head>
          <DefaultSeo
            titleTemplate={`${config.app.name} | %s`}
            defaultTitle={config.app.name}
            description={config.app.description}
            openGraph={{
              type: 'website',
              locale: lang,
              url: config.app.url,
              site_name: config.app.name,
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </IconContext.Provider>
      </ChakraProvider>
    </PlausibleProvider>
  );
}
