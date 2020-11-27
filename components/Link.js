import NextLink from 'next/link'

const Link = ({ href, as, children, className }) =>
  href.startsWith('https://') ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <NextLink href={href} as={as} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  )

export default Link
