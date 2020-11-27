import Markdown from '../components/Markdown'
import SubscribeForm from '../components/SubscribeForm'

const SplashPage = () => (
  <>
    <Markdown
      text={`

# Welcome; please poke around!

This is my repository of past projects, writing, and book notes (plus soon quotes); I try to publish something every day, but am pretty bad at it.

Right now, I'm in charge of tech at [WEEKDAYS](https://joinweekdays.com), a marketplace for micro-schools that focuses on quality above all else. (Each has 3-8 kids, with 1 teacher, in 1 home; it's similar to homeschooling, but not quite the same).

If you want to chat for any reason (writing, contracting, or socially), please don't hesitate to reach out via [email](mailto:brennan.colberg@gmail.com) or [Twitter](https://twitter.com/BrennanColberg)! I usually don't bite 🙃

`}
    />
    <SubscribeForm className="mt-7" />
  </>
)

export default SplashPage
