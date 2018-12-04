import React from 'react'
import MinuteTimer from './MinuteTimer'
import WordPerMin from './WordPerMin'
import CharsPerMin from './CharsPerMin'
import Accuracy from './Accuracy'

class Stats extends React.Component {


  render(){
    return(
      <div>
        <MinuteTimer timerStarted={this.props.timerStarted} timer={this.props.timer} />
        <WordPerMin />
        <CharsPerMin />
        <Accuracy />
      </div>
    )
  }

}

export default Stats
