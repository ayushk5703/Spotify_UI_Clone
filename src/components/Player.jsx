// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { assets } from '../assets/assets.js'; // Ensure this path is correct
import { PlayerContext } from '../context/PlayerContext.jsx';

const Player = () => {
  const { seekBar, seekBg, track, playStatus, play, pause ,time,previous,next,seekSong} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      
      {/* Song Info Section */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt='Song Cover' />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      
      {/* Playback Controls */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle Icon' />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous Icon' />

          {playStatus ? (
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='Pause Icon' />
          ) : (
            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='Play Icon' />
          )}
          
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt='Next Icon' />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop Icon' />
        </div>

        {/* Progress Bar */}
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative'>
            <div ref={seekBar} className='h-1 bg-green-800 rounded-full' style={{ width: '0%' }}></div>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Additional Controls */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt='Plays Icon' />
        <img className='w-4' src={assets.mic_icon} alt='Mic Icon' />
        <img className='w-4' src={assets.queue_icon} alt='Queue Icon' />
        <img className='w-4' src={assets.speaker_icon} alt='Speaker Icon' />
        <img className='w-4' src={assets.volume_icon} alt='Volume Icon' />
        <div className='w-20 bg-slate-50 h-1 rounded-full cursor-pointer'>
          <div className='h-1 bg-black rounded-full' style={{ width: '50%' }}></div>
        </div>
        <img className='w-4' src={assets.mini_player_icon} alt='Mini Player Icon' />
        <img className='w-4' src={assets.zoom_icon} alt='Zoom Icon' />
      </div>
    </div>
  );
};

export default Player;
