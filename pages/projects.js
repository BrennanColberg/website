import Header from '../components/Header'
import Project from '../components/Project'
import projects from '../data/projects.json'

const ProjectsPage = () => (
  <>
    <Header />
    <main>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </main>
  </>
)

export default ProjectsPage
