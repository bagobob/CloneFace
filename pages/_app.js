import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps,session }) {
  return (
    <>
      <Head>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      
      <main>
          <Component {...pageProps} />
      </main>
    </>

  )
}
