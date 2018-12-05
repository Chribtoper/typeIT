import React from 'react'

const DisplaySong = ({songSelected, keyUp, keyDown}) => {
  return(

      <div>
      {keyDown === false ? <img src={songSelected.img_url} height='325' width='275'  className='display-song-1'/> : <img src={songSelected.img_url} height='325' width='275'  className='display-song-2'/> 
      }

      </div>

  )
}

export default DisplaySong
