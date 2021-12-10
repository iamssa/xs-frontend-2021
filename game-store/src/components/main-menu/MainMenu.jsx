import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css'

const MainMenu = () => {
  const menuItems = ['About store', 'Catalog', 'News', 'Login'];

  return (
    <>
      <nav className="MainMenu">
        <ul className="MainMenu-list">
          {menuItems.map((item) => (
            <li key={item} className="MainMenu-button">
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
};

export default MainMenu;
