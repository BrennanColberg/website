import links from '../data/links.json'
import Link from 'next/link'
import styles from '../styles/Navigation.module.scss'

const Navigation = () => (
  <nav className={styles.navigation}>
    {links.map((link) => (
      <Link href={link.href} passHref>
        <a>{link.text}</a>
      </Link>
    ))}
  </nav>
)

export default Navigation
