import React, { useEffect } from 'react';
import Header from './components/Header';
import BankCard from './components/BankCard';

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
    <main style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <BankCard />
    </main>
  );
}
