import styles from '../styles/Project.module.scss'

const Project = ({
  project: {
    published,
    color,
    links,
    title,
    subtitle,
    text: { elevator },
  },
}) =>
  published && (
    <div className={styles.project} style={{ '--color': color }}>
      {links &&
        Object.keys(links).map((key) => (
          <a
            className={`${styles.link} ${styles[key]}`}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {elevator && <p>{elevator}</p>}
    </div>
  )

export default Project
