import Preview from './Preview.js';
import projects from './assets/projects.json';

class ProjectPreview extends Preview {

  componentDidMount() {
    this.setState({
      articles: projects.map(project => {
        let links = [];
        if (project.link) links.push({"text": "view", "href": project.link});
        if (project.code) links.push({"text": "code", "href": project.code})
        return ({
        "title": project.name,
        "tags": project.languages,
        "description": project.description,
        "links": links
        });
      }),
      className: this.state.className + " Project"
    });
  }

}

export default ProjectPreview;