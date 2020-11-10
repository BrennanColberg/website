import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { firestoreClient } from '../data/firebase'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    window.firestoreClient = firestoreClient
  }, [])

  return (
    <div
      id="app"
      className={router.pathname.slice(1).replace(/\//g, '-') || 'root'}
    >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
