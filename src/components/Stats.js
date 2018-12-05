import React from 'react'
import MinuteTimer from './MinuteTimer'
import WordPerMin from './WordPerMin'
import CharsPerMin from './CharsPerMin'
import Accuracy from './Accuracy'

class Stats extends React.Component {



  render(){
    return(
    // if timerstopped == false
      <div>
        <div className="ui three statistics">

            <WordPerMin appState={this.props.appState}/>
            <CharsPerMin appState={this.props.appState}/>
            <Accuracy appState={this.props.appState}/>

        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className="ui one statistics">

              <MinuteTimer appState={this.props.appState} timerStarted={this.props.timerStarted} timer={this.props.timer} />

          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

      </div>
    )
  }

}

export default Stats

// <MinuteTimer appState={this.props.appState} timerStarted={this.props.timerStarted} timer={this.props.timer} />
// <WordPerMin appState={this.props.appState}/>
// <CharsPerMin appState={this.props.appState}/>
// <Accuracy appState={this.props.appState}/>
