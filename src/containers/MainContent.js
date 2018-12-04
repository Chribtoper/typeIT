import React from 'react'
import Stats from '../components/Stats'
import CreateAccount from './CreateAccount'
import LogIn from './LogIn'
import SongContainer from './SongContainer'

const SONGS = 'http://localhost:3000/songs'

class MainContent extends React.Component {

  state = {
    returningUser: false,
    loggedIn: false,
    input: '',
    newUser: false,
    songs: [],
    songSelected: false,
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

  handleCreateAccountInput = (input) => {
    this.setState({
      input: input
    })
  }

  handleCreateAccountSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: true,
      returningUser: false
    })
  }

  handleReturnUserClick = () => {
    this.setState({
      returningUser: true
    })
  }

  handleLogInInput = (input) => {
    this.setState({
      input: input
    })
  }

  handleLogInSubmit = (e) => {
    e.preventDefault()
    this.setState({
      loggedIn: true
    })
  }

  handleSelectSong = (song) => {
    this.setState({
      songSelected: song
    }, () => console.log(song.body))
  }

  renderContent = () => {
    if (this.state.returningUser === false && this.state.loggedIn === false) {
      return <CreateAccount
                input={this.state.input}
                handleCreateAccountInput={this.handleCreateAccountInput}
                handleCreateAccountSubmit={this.handleCreateAccountSubmit}
                handleReturnUserClick={this.handleReturnUserClick}/>
    } else if (this.state.returningUser === true && this.state.loggedIn === false ){
      return <LogIn
                input={this.state.input}
                handleLogInInput={this.handleLogInInput}
                handleLogInSubmit={this.handleLogInSubmit}/>
    } else if (this.state.loggedIn === true ){
      return <SongContainer
                songs={this.state.songs}
                handleSelectSong={this.handleSelectSong}
                />
    } else {
      return null
    }
  }

  render(){
    return(
      <div>

        <Stats timerStarted={this.props.timerStarted} timer={this.props.timer}/>
        {this.renderContent()}
      </div>
    )
  }

 }

export default MainContent
