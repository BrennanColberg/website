import Preview from './Preview.js';
import blog from './assets/blog.json';

class BlogPreview extends Preview {

  componentDidMount() {
    this.setState({
      articles: blog.map(post => ({
        "title": post.title,
        "subtitle": post.subtitle
      })),
      className: this.state.className + " Blog"
    });
  }

}

export default BlogPreview;