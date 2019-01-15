import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Renders the markdown-form content of a given article.
 */
const Article = ({ match }) => (
  <main className="Article">
    <ReactMarkdown
      source={require("./assets/" + match.params.folder + "/" + match.params.name + ".json").content} 
      escapeHtml={false}
    />
  </main>
);

export default Article;