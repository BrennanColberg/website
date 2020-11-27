import '../styles.css'
import { useEffect } from 'react'
import { analyticsClient } from '../data/firebase'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analyticsClient.setAnalyticsCollectionEnabled(true)
  }, [])

  return (
    <>
      <Head>
        <title>Brennan Colberg</title>
      </Head>

      <div className="min-h-screen w-screen flex flex-col items-center gradient-background">
        <Header />
        <main className="max-w-xl p-4 sm:p-8 bg-white rounded-3xl shadow-2xl m-3 mb-6 sm:mb-10 md:mb-16">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
