import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import projectFileIndex from './assets/project-index.json';
import bookFileIndex from './assets/book-index.json';
import blogFileIndex from './assets/blog-index.json';

/**
 * Displays all projects encoded in ./assets/projects.json to
 * showcase my accomplishments and technological progress.
 */
class Preview extends Component {

  state = {
    articles: [],
    className: 'Preview'
  }

  componentDidMount() {
    if (this.props.json) {
      this.setState({
        articles: this.state.articles.concat(this.props.json)
      });
    }
  }

  render() {
    return (
      <section className={this.state.className}>
        {this.state.articles.map(article => (
          <Link to={article.link ? article.link : "/"}>
            <SinglePreview
              article={article}
              key={article.title}
            />
          </Link>
        ))}
      </section>
    );
  }
}

/**
 * Displays all relevant fields of encoded information about a single
 * article! Allows for easy formalization of the look of said previews.
 */
const SinglePreview = (props) => {
  let items = [];

  // article title
  if (props.article.title) {
    items.push(
      <h3 className="Preview_title" key="title">
        {props.article.title}
      </h3>
    );
  }

  // article subtitle
  if (props.article.subtitle) {
    items.push(
      <h4 className="Preview_subtitle" key="subtitle">
        {props.article.subtitle}
      </h4>
    );
  }

  // article tags
  if (props.article.tags) {
    items.push(
      <ul className="Preview_tags" key="tags">
        {props.article.tags.map(technology => (
          <li
            className={technology.toLowerCase().replace(/[ _:/.]+/, "-")}
            key={technology}
          >{technology}</li>
        ))}
      </ul>
    )
  }

  // article description
  if (props.article.description) {
    items.push(
      <p className="Preview_description" key="description">
        {props.article.description}
      </p>
    );
  }

  /* DISABLED DUE TO NESTED LINKS NOT WORKING (CARD = LINK)
  // article links
  if (props.article.links) {
    items.push(
      <ul className="Preview_links" key="links">
        {props.article.links.map(link => (
          <li key={link.href}>
            <a href={link.href} className="external" target="_blank" rel="noopener noreferrer">
              [{link.text}]
            </a>
          </li>
        ))}
      </ul>
    );
  }
  */

  return (
    <article className={"Preview_article" + (props.article.className ? " " + props.article.className : "")}>
      {items}
    </article>
  );

};

class ProjectPreview extends Preview {
  componentDidMount() {
    this.setState({

      articles: projectFileIndex.map(file => {
        // get JSON that is referred to
        let project = require("./assets/projects/" + file + ".json")
        // translate it into display format
        return ({
          "title": project.name,
          "tags": project.languages,
          "description": project.description,
          "link": "/projects/" + file
        });
      }),

      className: this.state.className + " Project"

    });
  }
}

class BookPreview extends Preview {
  componentDidMount() {
    this.setState({

      articles: bookFileIndex.map(file => {
        // get JSON that is referred to
        let book = require("./assets/books/" + file + ".json")
        // translate it into display format
        return ({
          "title": book.title,
          "tags": book.author,
          "link": "/books/" + file
        });
      }),

      className: this.state.className + " Book"

    });
  }
}

class BlogPreview extends Preview {
  componentDidMount() {
    this.setState({

      articles: blogFileIndex.map(file => {
        // get JSON that is referred to
        let post = require("./assets/blog/" + file + ".json")
        // translate it into display format
        return ({
          "title": post.title,
          "subtitle": post.subtitle,
          "link": "/blog/" + file
        });
      }),

      className: this.state.className + " Blog"

    });
  }
}

export default Preview;
export {
  ProjectPreview,
  BookPreview,
  BlogPreview
};