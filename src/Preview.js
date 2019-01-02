import React, {Component} from 'react';

/**
 * Displays all projects encoded in ./assets/projects.json to
 * showcase my accomplishments and technological progress.
 */
class Preview extends Component {

  constructor(props) {
    super(props);
    this.json = require('./assets/' + props.file);
    console.log(this.json);
  }

  render() {
    return (
      <section className="Preview">
        {this.json.map(article => (
          <SinglePreview
            article={article}
            key={article.title}
          />
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
      <h3 key="title">{props.article.title}</h3>
    );
  }

  // article subtitle
  if (props.article.subtitle) {
    items.push(
      <h4 key="subtitle">{props.article.subtitle}</h4>
    );
  }

  // article links
  if (props.article.links) {
    items.push(
      <div className="links" key="links">
        {props.article.links.map(link => (
          <a href={link.href} key={link.href}>{link.text}</a>
        ))}
      </div>
    );
  }

  // article description
  if (props.article.description) {
    items.push(
      <p key="description">{props.article.description}</p>
    );
  }

  // article tags
  if (props.article.tags) {
    items.push(
      <ul key="tags">
        {props.article.tags.map(technology => (
          <li
            className={technology.toLowerCase().replace(/[ _:\/\.]+/, "-")}
            key={technology}
          >{technology}</li>
        ))}
      </ul>
    )
  }

  return <div className="SinglePreview">{items}</div>;
};

export default Preview;