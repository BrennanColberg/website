import React from 'react';
import menuJSON from './assets/menu.json';

const Menu = () => (
  <nav className="Menu">
    {menuJSON.map(item =>
      <a href={item.href} key={item.text}>{item.text}</a>
    )}
  </nav>
);

export default Menu;