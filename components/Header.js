import Link from 'next/link'

const NavLink = ({ href, as, children }) => (
  <Link href={href} as={as} passHref>
    <a className="mx-2 hover:text-neutral-500 cursor-pointer font-medium">
      {children}
    </a>
  </Link>
)

const Header = () => (
  <header className="sm:bg-white my-6 sm:my-10 rounded-lg flex flex-col sm:flex-row justify-center items-center sm:shadow-xl">
    <div className="sm:bg-neutral-500 rounded-lg sm:rounded-lg mb-2 sm:mb-0 sm:pr-1 shadow-xl sm:shadow-none">
      <Link href="/" passHref>
        <a className="flex items-center bg-neutral-200 pr-4 rounded-lg">
          <img src="/profile.png" className="h-10 w-10 rounded-lg" />
          <span className="ml-3 text-lg font-bold hover:text-neutral-500">
            Brennan Colberg
          </span>
        </a>
      </Link>
    </div>
    <nav className="bg-white py-2 px-3 sm:px-5 rounded-lg shadow-xl sm:shadow-none">
      <NavLink href="/projects">Projects</NavLink>
      {/* <NavLink href="/writing">Essays</NavLink> */}
      <NavLink href="/books">Book List</NavLink>
    </nav>
  </header>
)

export default Header
