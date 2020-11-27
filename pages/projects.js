import { firestoreClient } from '../data/firebase'
import Card from '../components/Card'
import Head from 'next/head'

export const getStaticProps = async () => ({
  props: {
    projects: await firestoreClient
      .collection('projects')
      .get()
      .then((snap) => snap.docs.map((doc) => doc.data()))
      .then((projects) =>
        projects.sort((a, b) => b.status.localeCompare(a.status))
      ),
  },
})

const ProjectsPage = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Brennan Colberg</title>
    </Head>
    {projects?.map((project, i) => (
      <Card
        key={i}
        title={project.title}
        text={project.subtitle}
        color="neutral"
        links={project.links}
        // tags={project.technologies.map((tech) => ({
        //   text: tech,
        //   color: 'neutral',
        // }))}
        status={project.status}
      />
    ))}
  </>
)

export default ProjectsPage
