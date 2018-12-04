import React from 'react'
import Song from './Song'

const SongContainer = ({songs, handleSelectSong}) => {

  const song = songs.map( song => {
    return <Song
              key={song.id}
              song={song}
              handleSelectSong={handleSelectSong}
/>
  })

  return(
    <div>
      Choose a Song!
      {song}
    </div>
  )
}

export default SongContainer
