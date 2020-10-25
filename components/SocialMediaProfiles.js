import socialMediaProfiles from '../data/social-media-profiles.json'
import styles from '../styles/SocialMediaProfiles.module.scss'

const SocialMediaProfiles = () => (
  <div className={styles.socialMediaProfiles}>
    {socialMediaProfiles
      .filter(({ active }) => active)
      .map((profile) => (
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
      ))}
  </div>
)

export default SocialMediaProfiles
