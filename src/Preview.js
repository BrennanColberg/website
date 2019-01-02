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
            key={article.name}
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
const SinglePreview = (props) => (
  <div className="SinglePreview">
    <h2>{props.article.name}</h2>
    <p>{props.article.description}</p>
    <ul>
      {props.article.tags.map(technology => (
        <li
          className={technology.toLowerCase().replace(/[ _:\/\.]+/, "-")}
          key={technology}
        >{technology}</li>
      ))}
    </ul>
  </div>
);

export default Preview;