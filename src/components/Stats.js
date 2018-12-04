import React from 'react'
import MinuteTimer from './components/MinuteTimer'
import WordPerMin from './components/WordPerMin'
import CharsPerMin from './components/CharsPerMin'
import Accuracy from './components/Accuracy'

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
