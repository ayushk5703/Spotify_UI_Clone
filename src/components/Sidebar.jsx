// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ bgColor }) => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full flex flex-col gap-2 text-white hidden lg:flex' style={{ backgroundColor: bgColor }}>
      
      {/* Top Section */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-center'>
        
        {/* Home Icon */}
        <div onClick={() => navigate('/')} className='flex items-center gap-5 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt='Home Icon' />
          <p className='font-bold'>Home</p>
        </div>
        
        {/* Search Icon */}
        <div onClick={() => navigate('/search')} className='flex items-center gap-5 pl-8 cursor-pointer mt-3'>
          <img className='w-6' src={assets.search_icon} alt='Search Icon' />
          <p className='font-bold'>Search</p>
        </div>

      </div>
      
      {/* Bottom Section */}
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='flex items-center justify-between p-4'>
          {/* Stack Icon with Arrow and Plus Icons */}
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt='Stack Icon' />
            <p className='font-semibold'>Your Library</p>
          </div>
          
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt='Arrow Icon' />
            <img className='w-5' src={assets.plus_icon} alt='Plus Icon' />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create Your First Playlist</h1>
          <p className='font-light'>It is Easy we will help you</p>
          <button className='px-4 scroll-py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button> 
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Lets find some Podcast to follow</h1>
          <p className='font-light'>We will keep you updated on new episodes</p>
          <button className='px-4 scroll-py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button> 
        </div>
      </div>
      
    </div>
  );
};

// Define PropTypes for the Sidebar component
Sidebar.propTypes = {
  bgColor: PropTypes.string.isRequired,  // bgColor is expected to be a string and is required
};

export default Sidebar;
