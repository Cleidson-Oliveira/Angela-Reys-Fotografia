import Document, {Html, Head, Main, NextScript  } from 'next/document';

export default class MyDocument extends Document {
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
