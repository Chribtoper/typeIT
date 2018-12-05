import React from 'react'

const MinuteTimer = (props) => {
  return(
  <div className="ui huge statistic" >
    <div className="value">
      {props.timer}
    </div>
    <div className="label">
      Timer
    </div>
  </div>)
}

export default MinuteTimer
