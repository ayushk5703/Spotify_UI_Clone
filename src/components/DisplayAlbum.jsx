// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);
  const {playWithId}=useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className='mt-10 flex flex-col md:flex-row gap-8 md:items-end px-8'>
        {/* Album Image */}
        <img className='w-48 md:w-64 rounded shadow-lg' src={albumData.image} alt={albumData.name} />

        {/* Album Info */}
        <div className='flex flex-col text-white'>
          <p className='uppercase tracking-widest text-sm font-semibold text-gray-400 mb-2'>Playlist</p>
          <h2 className='text-5xl md:text-7xl font-bold mb-4'>{albumData.name}</h2>
          <h4 className='text-lg font-medium text-gray-300'>{albumData.desc}</h4>
          <p className='mt-4 text-sm text-gray-400'>
            <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt='Spotify Logo' />
            <b className='text-white'>Spotify</b> • 1,132,154 likes • <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
<img className='m-auto w-4' src={assets.clock_icon}></img>

      </div>
      <hr />
      {
        songsData.map((item,index)=>(
            <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
            <img className='inline w-10 mr-5' src={item.image}></img>
            {item.name}

</p>
<p className='text-[15px]'>{albumData.name}</p>
<p className='text-[15px] hidden sm:block'>5 days ago</p>
<p className='text-[15px] text-center'>{item.duration}</p>
            </div>

        ))
      }
    </>
  );
}

export default DisplayAlbum;
