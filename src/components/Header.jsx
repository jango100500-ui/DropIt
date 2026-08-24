import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="header-avatar"></div>
        <div className="header-skeletons">
          <div className="skeleton-name"></div>
          <div className="skeleton-id"></div>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-settings">
          <img src="/settings.png" alt="Settings" className="settings-icon" />
        </div>
      </div>
    </header>
  );
}
