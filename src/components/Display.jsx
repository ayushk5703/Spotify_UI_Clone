// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';
import Search from './Search';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";

  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  // State to store the slider color
  const [sliderColor, setSliderColor] = useState('#fff');

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
      setSliderColor(bgColor); // Update slider color based on album bgColor
    } else {
      displayRef.current.style.background = '#121212';
      setSliderColor('#fff'); // Default slider color
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:m-0'>
      <style>
        {`
          /* Slider styling */
          ::-webkit-scrollbar-thumb {
            background-color: ${sliderColor};
            border-radius: 10px;
          }

          /* Optional: Customize scrollbar track */
          ::-webkit-scrollbar-track {
            background-color: #121212;
            border-radius: 10px;
          }

          /* Optional: Customize scrollbar width */
          ::-webkit-scrollbar {
            width: 8px;
          }
        `}
      </style>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
        <Route path='/search' element={<Search />} />  
      </Routes>
    </div>
  );
};

export default Display;
