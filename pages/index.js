import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const SplashPage = () => (
  <>
    <main>
      <Logo />
      <p>I'm an autodidact, trying to reinvent high school at scale.</p>
      <p>
        Today's schools were built for an authoritarian world, and—even with
        reform—are unfit to train the workforce of 2050. They urgently need to
        be replaced; but with what? It's a hard design problem, because of
        administrative scalability, but crucial to crack SOON—and nobody else
        seems to be working on it. (If you are, PLEASE reach out!)
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
        , a marketplace for elementary-age micro-schools (each has 3-10 kids,
        with 1 teacher, in 1 home).
      </p>
      <p>
        I usually plug into the Internet from Corvallis, OR, USA (in UTC-8).
      </p>
      <Navigation />
    </main>
  </>
)

export default SplashPage
