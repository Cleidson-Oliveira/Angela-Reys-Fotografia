import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
            <link 
              href="https://fonts.googleapis.com"
              rel="preconnect"
            />
            <link
              href={"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap"}
              rel="stylesheet"
            />            
            <link 
              rel="icon" 
              href="/favicon.ico"
            />            
            <link 
              rel='stylesheet' 
              href='/nprogress.css' 
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
    )
  }
}
