import React from 'react';
import Carousel from 'react-responsive-carousel'
import logo from './logo.svg';
import './App.css';
import MainContent from './containers/MainContent'
import Header from './components/Header'
import TypePanel from './containers/TypePanel'
import Modal from './containers/Modal'


const SONGS = 'http://localhost:3000/songs'

class App extends React.Component {
  state = {
    timerStarted: false,
    timer: 60,
    timerComplete: false,
    state: null,
    songs: [],
    songSelected: false,
    songClicked: false,
    cpm: 0,
    wpm: 0,
    accuracy: 0
  }

  componentDidMount(){
    fetch('http://localhost:3000/songs')
      .then( r => r.json())
      .then( songs => {
        this.setState({
          songs: songs
        })
      })
  }

  startTimer = () => {
    if(this.state.timerStarted == false){
      this.setState({
        timerStarted: true
      })
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
      this.myTimerComplete()

    }
  }

  myTimerComplete = () => {
    let cpm = document.querySelector("#cpm").innerText;
    let wpm = document.querySelector("#wpm").innerText;
    let accuracy = document.querySelector("#accuracy").innerText;
    this.setState({
      cpm: cpm,
      wpm: wpm,
      accuracy: accuracy
    })


    let modal = document.getElementById('myModal');
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
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
      {this.state.songClicked
        ?
        <div>
          <Header />
          <MainContent
            timerStarted={this.state.timerStarted} timer={this.state.timer}
            songs={this.state.songs}
            handleSelectSong={this.handleSelectSong}
            songClicked={this.state.songClicked}
            appState={this.state}/>
          <TypePanel
            grabState={this.grabState} startTimer={this.startTimer}
            songs={this.state.songs}
            songSelected={this.state.songSelected}/>
        </div>
        :
        <div>
          <Header />
          <MainContent
            timerStarted={this.state.timerStarted} timer={this.state.timer}
            songs={this.state.songs}
            handleSelectSong={this.handleSelectSong}
            songClicked={this.state.songClicked}/>
          </div>
      }
      <Modal appState={this.state}/>

      </div>
    )
  }
}

export default App;
