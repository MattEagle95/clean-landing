import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html lang={locale} dir={'ltr'}>
        <Head />
        <body
          className={
            'bg-light text-dark-800 dark:bg-dark dark:text-light-200'
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
