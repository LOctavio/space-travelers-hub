import React from 'react';
import logo from '../../assets/images/space-travellers-hub-logo.png';

function Header() {
  return (
    <header className="space-header">
      <div className="site-title">
        <img className="logo" src={logo} alt="space travellers hub logo" />
        <span className="title">Space Traveller&apos;s Hub</span>
      </div>
      <nav className="space-nav" />
    </header>
  );
}

export default Header;
