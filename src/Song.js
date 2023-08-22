import React from 'react'
import { api } from './api'
function Song({currentSong}) {
  return (
    <div className='song'>
        <img className='cover' src={currentSong.cover}/>
        <h3>{currentSong.name}</h3>
        <h4>Artist</h4>
    </div>
  )
}

export default Song