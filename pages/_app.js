import '../styles/globals.scss'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
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
