import React from 'react';

const BlogPost = ({ match }) => {
  let post = match.params.name;
  let json = require("./assets/blog/" + post + ".json");
  return (
    <h3>{JSON.stringify(json)}</h3>
  );
};

export default BlogPost;