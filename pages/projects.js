import Card from '../components/Card'
import Head from 'next/head'
import { multipleStaticProps } from '../helpers/static-rendering'

export const getStaticProps = multipleStaticProps({
  type: 'project',
  sort: (a, b) => b.status.localeCompare(a.status),
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
