import React, { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

    // Блокируем скейл и системные свайпы
    document.addEventListener('gesturestart', preventDefault, { passive: false });
    document.addEventListener('gesturechange', preventDefault, { passive: false });
    document.addEventListener('gestureend', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
      document.removeEventListener('gestureend', preventDefault);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Вставка на верхнюю треть экрана */}
      <div className="top-section">
        <div className="header-content">
          <div className="header-left">
            <div className="liquid-glass avatar-circle"></div>
            <div className="header-skeletons">
              <div className="skeleton-name"></div>
              <div className="skeleton-id"></div>
            </div>
          </div>
          
          <div className="header-right">
            <div className="liquid-glass settings-circle">
              <img src="/settings.png" alt="Settings" className="settings-icon" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Основная часть с карточкой */}
      <div className="main-section">
        <div className="visa-card">
          <div className="card-top">
            <img src="/dropit.png" alt="DropIt Logo" className="card-logo" />
          </div>
          
          <div className="card-bottom">
            <div className="card-balance">
              <span className="currency">$</span>
              <span className="amount">12 450</span>
            </div>
            <div className="card-brand">DropIt</div>
          </div>
        </div>
      </div>
    </div>
  );
}
