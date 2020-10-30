import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const SplashPage = () => (
  <>
    <div style={{ gridArea: 'logo' }}>
      <Logo />
    </div>

    <main>
      <p>
        I'm an autodidact with the goal of reinventing high school at scale.
      </p>
      <p>
        Today's schools were built for an authoritarian world, and—even with
        reform—are simply unable to train the skilled workforce we'll need in
        2050. They need to be replaced with something new and better; but it's a
        hard problem, almost solely because of the required administrative
        scalability. It's one I hope to crack within 3 years. If you want to
        help me, please reach out!
      </p>
      <p>
        Right now, I'm the software engineer &amp; architect behind{' '}
        <a
          href="https://joinweekdays.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEEKDAYS
        </a>
        , the leading US micro-school (3-10 kids, 1 teacher, in 1 home)
        marketplace.
      </p>
      <p>
        I'm a born{' '}
        <a
          href="https://en.wikipedia.org/wiki/Seattle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seattle
        </a>
        ite, but now live in{' '}
        <a
          href="https://en.wikipedia.org/wiki/Corvallis,_Oregon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corvallis
        </a>
        , working and socializing remotely. (If you want to Zoom, please reach
        out!)
      </p>
    </main>

    <div style={{ gridArea: 'nav' }}>
      <Navigation />
    </div>
  </>
)

export default SplashPage
