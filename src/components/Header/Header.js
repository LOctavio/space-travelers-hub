import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/space-travellers-hub-logo.png';

function Header() {
  return (
    <header className="space-header">
      <div className="site-title">
        <img className="logo" src={logo} alt="space travellers hub logo" />
        <span className="title">Space Traveller&apos;s Hub</span>
      </div>
      <nav className="space-nav">
        <ul className="links-nav">
          <li className="mx-3">
            <NavLink
              className={(isActive) => `link-nav${isActive ? '-active' : ''}`}
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) => `link-nav${isActive ? '-active' : ''}`}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <div className="line-between" />
          <li>
            <NavLink
              className={(isActive) => `link-nav${isActive ? '-active' : ''}`}
              to="/my-profile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
