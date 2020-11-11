import Header from '../components/Header'
import { firestoreClient } from '../data/firebase'
import styles from '../styles/SocialMediaProfiles.module.scss'

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
    <Header />
    <main>
      <h1>I'm "BrennanColberg" everywhere</h1>

      <div className={styles.socialMediaProfiles}>
        {socialMediaProfiles
          .filter(({ active }) => active)
          .map((profile, i) => (
            <SocialMediaProfile key={i} profile={profile} />
          ))}
      </div>
      {/* <hr />
      <div className={styles.socialMediaProfiles}>
        {socialMediaProfiles
          .filter(({ active }) => !active)
          .map((profile, i) => (
            <SocialMediaProfile key={i} profile={profile} />
          ))}
      </div> */}
    </main>
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
