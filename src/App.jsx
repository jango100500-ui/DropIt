import React, { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

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
      <section className="top-backdrop">
        <header className="header-bar">
          <div className="header-left">
            <div className="liquid-glass-circle avatar-circle"></div>
            <div className="header-skeletons">
              <div className="skeleton-pill name-pill"></div>
              <div className="skeleton-pill id-pill"></div>
            </div>
          </div>
          
          <div className="header-right">
            <div className="liquid-glass-circle settings-circle">
              <img src="/settings.png" alt="Settings" className="settings-icon" />
            </div>
          </div>
        </header>

        <div className="card-wrapper">
          <div className="visa-card">
            <div className="card-top">
              <img src="/dropit.png" alt="DropIt" className="card-logo" />
            </div>

            <div className="card-bottom">
              <div className="card-skeletons">
                <div className="skeleton-card-pill balance-pill"></div>
                <div className="skeleton-card-pill user-pill"></div>
              </div>
              <div className="card-brand">DropIt</div>
            </div>
          </div>
        </div>
      </section>

      <main className="content-area"></main>
    </div>
  );
}
