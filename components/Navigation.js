import links from '../data/links.json'
import Link from 'next/link'

const Navigation = () => (
  <nav>
    {links.map((link) => (
      <Link href={link.href} passHref>
        <a>{link.text}</a>
      </Link>
    ))}
  </nav>
)

export default Navigation
