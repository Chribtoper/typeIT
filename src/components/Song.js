import React from 'react'

const Song = ({song, handleSelectSong}) => {

  return(
    <div>
      <br />
        <img
          src={song.img_url}
          className='song'
          height='200'
          width='250'
          onClick={ () => handleSelectSong(song)}/> <br />
        {song.title} <br />
        {song.artist.name}
      <br />
      <br />
    </div>
  )
}

export default Song
