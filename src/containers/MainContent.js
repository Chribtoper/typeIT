import React from 'react'
import Stats from '../components/Stats'
import LogIn from '../components/LogIn'
import SongContainer from '../components/SongContainer'
import CreateAccount from '../components/CreateAccount'

class MainContent extends React.Component {

  state = {
    returningUser: false,
    loggedIn: false,
    input: '',
    newUser: false

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
    } else if (this.state.loggedIn === true && this.props.songClicked === false ){
      return <SongContainer
                songs={this.props.songs}
                handleSelectSong={this.props.handleSelectSong}
                />
    } else if (this.props.songClicked === true ){
      return <Stats
          timerStarted={this.props.timerStarted} timer={this.props.timer}/>
    } else {
      return null
    }
  }




  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }

 }

export default MainContent
