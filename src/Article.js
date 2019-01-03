import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ match }) => {
  const json = require("./assets/" + match.params.folder + "/" + match.params.name + ".json");
  return (
    <ReactMarkdown
      source={json.content} 
      escapeHtml={false}
    />
  );
};

export default Article;