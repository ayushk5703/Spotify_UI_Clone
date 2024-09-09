// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0] || {});
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    const song = songsData[id];
    if (song) {
      setTrack(song);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        setPlayStatus(true);
      }
    } else {
      console.error("Song not found for id:", id);
    }
  };

  const previous=async()=>{
    if(track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const next=async()=>{
    if(track.id< songsData.length-1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
 

  const seekSong = (e) => {
    if (audioRef.current && seekBg.current) {
      const offsetX = e.nativeEvent.offsetX;
      const seekBarWidth = seekBg.current.offsetWidth;
      const duration = audioRef.current.duration;
  
      if (duration && seekBarWidth > 0) {
        const newTime = (offsetX / seekBarWidth) * duration;
  
        // Ensure newTime is within the range [0, duration]
        audioRef.current.currentTime = Math.min(Math.max(newTime, 0), duration);
      }
    } else {
      console.error('Audio reference or seek bar reference is missing.');
    }
  };
  







  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      }
    };

    const timeoutId = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = handleTimeUpdate;
      }
    }, 1000);

    // Clean up the timeout and event handler on component unmount
    return () => {
      clearTimeout(timeoutId);
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, []); // Remove audioRef from dependency array

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

PlayerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
