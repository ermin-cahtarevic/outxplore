import React, { useEffect } from 'react';

import './main.css';

const Main = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('nav-scroll');
    } else {
      document.querySelector('.navbar').classList.remove('nav-scroll');
    }
  }

  return (
    <main className="main">
      <div className="main-top"></div>
      <div style={{height: '500px'}}></div>
    </main>
  );
};

export default Main;
