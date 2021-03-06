import '../styles.css'
import { useEffect } from 'react'
import { analyticsClient, authClient, firestoreClient } from '../data/firebase'
import Head from 'next/head'
import Header from '../components/Header'
import firebase from 'firebase/app'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analyticsClient.setAnalyticsCollectionEnabled(true)
    window.firestoreClient = firestoreClient
    window.login = () =>
      authClient.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }, [])

  return (
    <>
      <Head>
        <title>Brennan Colberg</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="min-h-screen w-screen flex flex-col items-center gradient-background">
        <Header />
        <main className="w-11/12 max-w-xl p-5 bg-white rounded-3xl shadow-2xl mt-3 mb-6 sm:mb-10 md:mb-16">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
