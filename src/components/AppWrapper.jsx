// App.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Display from './Display';
import Sidebar from './Sidebar';
import { albumsData } from '../assets/assets';

const App = () => {
  const [bgColor, setBgColor] = useState("#121212");
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";

  useEffect(() => {
    const color = albumsData[Number(albumId)]?.bgColor || "#121212";
    setBgColor(color);
  }, [albumId]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar color={bgColor} />
      <div style={{ flex: 1 }}>
        <Display />
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
