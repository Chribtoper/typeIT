import React from 'react'
import Stats from '../components/Stats'
import SongContainer from '../components/SongContainer'

class MainContent extends React.Component {
  //
  // state = {
  //   returningUser: false,
  //   loggedIn: false,
  //   input: '',
  //   newUser: false
  // }
  //
  // handleCreateAccountInput = (input) => {
  //   this.setState({
  //     input: input
  //   })
  // }
  //
  // handleCreateAccountSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     loggedIn: true,
  //     returningUser: false
  //   })
  // }
  //
  // handleReturnUserClick = () => {
  //   this.setState({
  //     returningUser: true
  //   })
  // }
  //
  // handleLogInInput = (input) => {
  //   this.setState({
  //     input: input
  //   })
  // }
  //
  // handleLogInSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     loggedIn: true
  //   })
  // }

  renderContent = () => {
    if (this.props.songClicked === false) {
      return <SongContainer
                songs={this.props.songs}
                handleSelectSong={this.props.handleSelectSong}
                />
    } else if (this.props.songClicked === true ){
      return <Stats
                timerStarted={this.props.timerStarted}
                timer={this.props.timer}
                appState={this.props.appState}/>
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
