import React, {Component} from 'react';

const App = () => (
  <div className="App">
    <h1>Brennan Colberg</h1>
    <p>
      Hi, my name's Brennan! I'm a student who likes to learn and
      program; here are some past projects of mine:
    </p>
    {/* Project Preview */}
    <p>
      In my spare time, I try to read as much as possible. Here are
      some books I've read, notable quotes from them, and what I think
      about them:
    </p>
    {/* Book Preview */}
    <p>
      I also write about interesting thoughts that come to me, occasionally:
      read some of those ramblings here!
    </p>
    {/* Blog Preview */}
    <p>
      Want to get in touch? Here lie my online personas:
    </p>
    <ContactInfo />
  </div>
);

class ContactInfo extends Component {
  render() {
    return (
      <div className="ContactInfo">

      </div>
    );
  }
}

export default App;
