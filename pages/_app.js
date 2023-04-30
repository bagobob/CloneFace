import '@/styles/globals.css'
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

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
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>

  )
}
