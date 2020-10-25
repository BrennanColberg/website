import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => (
  <div className={styles.header}>
    <Link href="/" passHref>
      <a className="subtle">
        <Logo />
      </a>
    </Link>
    <Navigation />
  </div>
)

export default Header
