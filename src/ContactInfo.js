import React, {Component} from 'react';
import contactJSON from './assets/contact.json';

/**
 * Displays contact info from a JSON file. Does not provide simplified
 * previews without clicking; however, it may in the future.
 */
class ContactInfo extends Component {
  render() {
    return (
      <ul className="ContactInfo">
        {contactJSON.map(item => (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactInfo;