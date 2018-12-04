import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './containers/MainContent'
import Header from './components/Header'
import TypePanel from './containers/TypePanel'

const SONGS = 'http://localhost:3000/songs'

class App extends React.Component {
  state = {
    timerStarted: false,
    timer: 60,
    timerComplete: false,
    state: null,
    songs: [],
    songSelected: false,
    songClicked: false
  }

  componentDidMount(){
    fetch(SONGS)
      .then( r => r.json())
      .then( songs => {
        this.setState({
          songs: songs
        })
      })
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

   grabState = (state) => {
    this.setState({state: state})
  }

  handleSelectSong = (song) => {
    this.setState({
      songSelected: song,
      songClicked: true

    })
  }

  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
        <MainContent
          timerStarted={this.state.timerStarted} timer={this.state.timer}
          songs={this.state.songs}
          handleSelectSong={this.handleSelectSong}
          songClicked={this.state.songClicked}/>
        <TypePanel
          grabState={this.grabState} startTimer={this.startTimer}
          songs={this.state.songs}
          songSelected={this.state.songSelected}/>
=======
        <MainContent appState={this.state} timerStarted={this.state.timerStarted} timer={this.state.timer} />
        <TypePanel grabState={this.grabState} startTimer={this.startTimer}/>
>>>>>>> NewShawna
      </div>
    )
  }
}

export default App;
