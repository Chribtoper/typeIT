import React from 'react'

const DisplaySong = ({songSelected}) => {
  return(

      <div>
        <img src={songSelected.img_url} height='325' width='275'  className='display-song'/>
      </div>

  )
}

export default DisplaySong
