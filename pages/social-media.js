import { firestoreClient } from '../data/firebase'

const SocialMediaProfile = ({ profile }) => (
  <a
    style={{
      '--color': profile.color,
    }}
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={`logos/${profile.name}.png`} alt={profile.name} />
    <span>{profile.user}</span>
  </a>
)

const ContactPage = ({ socialMediaProfiles }) => (
  <>
    <h1>I'm "BrennanColberg" everywhere</h1>

    <div>
      {socialMediaProfiles
        .filter(({ active }) => active)
        .map((profile, i) => (
          <SocialMediaProfile key={i} profile={profile} />
        ))}
    </div>
  </>
)

export async function getStaticProps() {
  const snap = await firestoreClient.collection('social-media').get()
  const socialMediaProfiles = snap.docs.map((doc) => doc.data())
  return {
    props: { socialMediaProfiles },
  }
}

export default ContactPage
