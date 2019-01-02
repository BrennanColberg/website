import React from 'react';
import Preview from './Preview.js';
import ContactInfo from './ContactInfo.js';

const Home = () => (
  <main class="Home">

    <p>
      Hi, my name's Brennan! I'm a student who likes to learn and
      program; here are some past projects of mine:
    </p>
    <Preview 
      className="Projects"
      json={require('./assets/projects.json').map(project => {
        let links = [];
        if (project.link) links.push({"text": "view", "href": project.link});
        if (project.code) links.push({"text": "code", "href": project.code})
        return ({
        "title": project.name,
        "tags": project.languages,
        "description": project.description,
        "links": links
        });
      })} 
    />

    <p>
      In my spare time, I try to read as much as possible. Here are
      some books I've read, notable quotes from them, and what I think
      about them:
    </p>
    <Preview
      className="Books"
      json={require('./assets/books.json').map(book => ({
        "title": book.title /* + (book.subtitle ? ": " + book.subtitle : "") */,
        "tags": book.author
      }))}
    />

    <p>
      I also write about interesting thoughts that come to me, occasionally:
      read some of those ramblings here!
    </p>
    <Preview 
      className="Blog"
      json={require('./assets/blog.json')} 
    />

    <p>
      Want to get in touch? Here are my profiles on common websites:
    </p>
    <ContactInfo />

  </main>
);

export default Home;