import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { faBackward, faForward, faPlay } from '@fortawesome/free-solid-svg-icons'
function Player({currentSong,isPlaying,setIsPlaying}) {
  const audioRef = useRef(null);
  const SongHandler =()=> {
     if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
     }
     else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
     }
  }
  const [songInfo,setSongInfo]= useState({
    startTime: null,
    durationTime:null
  })
  const timeHandler =(e)=>{
     setSongInfo({
      startTime: e.target.currentTime,
      durationTime: e.target.duration
     })
  }
  const getItem =(time)=>{
    return (
      Math.floor(time/60) + ':' + ('0'+ Math.floor(time%60)).slice(-2)
    )
  }
  const dragTime =(e)=>{
    audioRef.current.currentTime = e.target.value
  }
  return (
    <div className='player'>
        <div className='line-control'>
           <p>{getItem(songInfo.startTime)}</p>
           <input type='range' min='0'  max={songInfo.durationTime} value={songInfo.startTime}
           onChange={dragTime}/>
           <p>{getItem(songInfo.durationTime)}</p>
        </div>
        <div className='player-control'>
        <FontAwesomeIcon icon={faBackward}  size='2x' />
        <FontAwesomeIcon  icon={faPlay}  size='2x' 
         onClick={SongHandler}
        />
        <FontAwesomeIcon icon={faForward} size='2x'/>
        </div>
        <audio onTimeUpdate={timeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;
