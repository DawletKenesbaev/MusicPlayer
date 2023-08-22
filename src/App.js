import React, { useState } from 'react'
import Song from './Song'
import Player from './Player'
import { api } from './api'
function App() {
  const [songs,setSongs]=useState(api)
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [isPlaying,setIsPlaying]= useState(false)
  console.log(currentSong);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  )
}

export default App