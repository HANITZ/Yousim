import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko-KR'>
        <Head>
          <meta charSet='utf-8' />
          <link
            href='../../public/static/fonts/pretendard.css'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;