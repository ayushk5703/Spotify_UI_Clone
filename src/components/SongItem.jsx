// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, image, desc,id  }) => {
  const {playWithId}=useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

SongItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default SongItem
