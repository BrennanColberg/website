import React, {Component} from 'react';
import Preview from './Preview.js';
import contactJSON from './assets/contact.json';

const App = () => (
  <div className="App">
    <h1>Brennan Colberg</h1>
    <p>
      Hi, my name's Brennan! I'm a student who likes to learn and
      program; here are some past projects of mine:
    </p>
    <Preview file={'projects.json'} />
    <p>
      In my spare time, I try to read as much as possible. Here are
      some books I've read, notable quotes from them, and what I think
      about them:
    </p>
    <Preview file={'books.json'} />
    <p>
      I also write about interesting thoughts that come to me, occasionally:
      read some of those ramblings here!
    </p>
    <Preview file={'blog.json'} />
    <p>
      Want to get in touch? Here lie my online personas:
    </p>
    <ContactInfo />
  </div>
);

/**
 * Displays contact info from a JSON file. Does not provide simplified
 * previews without clicking; however, it may in the future.
 */
class ContactInfo extends Component {
  render() {
    return (
      <ul className="ContactInfo">
        {contactJSON.map(item => (
          <li key={item.link}><a href={item.link}>{item.name}</a></li>
        ))}
      </ul>
    );
  }
}

export default App;
