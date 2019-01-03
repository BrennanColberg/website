import React from 'react';
import {ProjectPreview, BookPreview, BlogPreview} from './Preview.js';
import ContactInfo from './ContactInfo.js';

const Home = () => (
  <main className="Home">

    <p>
      Hi, my name's Brennan! I'm a student who likes to learn and
      program; here are some past projects of mine:
    </p>
    <ProjectPreview />

    <p>
      In my spare time, I try to read as much as possible. Here are
      some books I've read, notable quotes from them, and what I think
      about them:
    </p>
    <BookPreview />

    <p>
      I also write about interesting thoughts that come to me, occasionally:
      read some of those ramblings here!
    </p>
    <BlogPreview />

    <p>
      Want to get in touch? Here are my profiles on common websites:
    </p>
    <ContactInfo />

  </main>
);

export default Home;