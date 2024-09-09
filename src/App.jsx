// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { audioRef, track } = useContext(PlayerContext);  // Accessing the context values

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      {track?.file && <audio ref={audioRef} src={track.file} preload='auto' />}
    </div>
  );
}

export default App;
