import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Link from 'next/link'

const SplashPage = () => (
  <>
    <main>
      <Logo />
      <p>
        I'm an autodidact (learn from{' '}
        <Link href="/books" passHref>
          <a>books</a>
        </Link>{' '}
        as a primary hobby), programmer (like to make things), and miser (don't
        like to spend money). I plan to retire by 30 to raise and homeschool
        kids.
      </p>
      <p>
        I hope to help reinvent American high schools within the decade. Today's
        schools were built for an authoritarian world, and—even with reform—are
        unfit to train the workforce of 2050. They urgently need to be replaced;
        but with what? It's a hard design problem, because of administrative
        scalability, but crucial to crack SOON—and nobody else seems to be
        working on it. (If you are, PLEASE reach out!)
      </p>
      <p>
        Right now, I'm building{' '}
        <a
          href="https://joinweekdays.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEEKDAYS
        </a>
        , a marketplace for elementary-age micro-schools (each has 3-8 kids,
        with 1 teacher, in 1 home).
      </p>
      <p>I live in Corvallis, OR (but am extremely connected to Seattle).</p>
      <Navigation />
    </main>
  </>
)

export default SplashPage
