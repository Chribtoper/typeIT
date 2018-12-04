import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './containers/MainContent'
import Header from './components/Header'
import TypePanel from './containers/TypePanel'

class App extends React.Component {
  state = {
    timerStarted: false,
    timer: 60,
    timerComplete: false

  }

  startTimer = () => {
    if(this.state.timerStarted == false){
      this.setState({timerStarted: true})
      this.decrementTimerBySec()
    }
  }

  myTimer = () => {
    let oldTime = this.state.timer
    let newTime = oldTime - 1
    if(newTime > 0){
    this.setState({timer: newTime})
    }else if (newTime == 0) {
      this.setState({timer: newTime, timerComplete: true})
    }
  }

  decrementTimerBySec = () => {
    setInterval(()=>{this.myTimer()},1000);

  }


  render() {
    return (
      <div>
        <Header />
        <MainContent timerStarted={this.state.timerStarted} timer={this.state.timer} />
        <TypePanel startTimer={this.startTimer}/>
      </div>
    )
  }
}

export default App;
