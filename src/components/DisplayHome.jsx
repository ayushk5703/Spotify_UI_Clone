// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem' // Import SongItem if you have it

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}  // Use a unique key for each item
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}  // If you need id, pass it; otherwise, you can omit it
            />
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today is biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (
            <SongItem
              key={index}  // Use a unique key for each item
              image={item.image}
              title={item.title}
              artist={item.artist}
              id={item.id}  // If you need id, pass it; otherwise, you can omit it
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
