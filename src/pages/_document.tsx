import { ColorModeScript } from '@chakra-ui/react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

import theme from '../theme/theme';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html lang={locale} dir={'ltr'}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
