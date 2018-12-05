import React from 'react'

const Song = ({song, handleSelectSong}) => {

  return(

    <div className="column">
      <div className="card">
        <img src={song.img_url} alt="Avatar" width="100%" height ="33%" onClick={ () => handleSelectSong(song)}/>
        <div class="container">
          <h4><b>{song.artist.name}</b></h4>
          <p>{song.title}</p>
        </div>
      </div>
    </div>

  )
}

export default Song

// <div>
//   <br />
//     <img
//       src={song.img_url}
//       className='song'
//       height='200'
//       width='250'
//       onClick={ () => handleSelectSong(song)}/> <br />
//     {song.title} <br />
//     {song.artist.name}
//
//   <br />
//   <br />
// </div>
//
