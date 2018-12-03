import React from 'react'
import Stats from './Stats'
import CreateAccount from './CreateAccount'
import LogIn from './LogIn'


class MainContent extends React.Component {

  state = {
    loggedIn: false,
    newUser: true,
    input: '',
    newUser: false,
  }

  handleCreateAccountInput = (input) => {
    this.setState({
      input: input
    })
  }

  handleCreateAccountSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: true
    })
  }

  handleReturnUser = () => {
    this.setState({
      loggedIn: true, 
      newUser: true
    })
  }

  handleLogInInput = (input) => {
    this.setState({
      input: input
    })
  }

  handleLogInSubmit = (e) => {
    e.preventDefault()
    this.setState({})
  }

  renderContent = () => {
    if (this.state.loggedIn === false) {
      return <CreateAccount
                input={this.state.input}
                handleCreateAccountInput={this.handleCreateAccountInput}
                handleCreateAccountSubmit={this.handleCreateAccountSubmit}
                loggedIn={this.state.loggedIn}
                handleReturnUser={this.handleReturnUser}/>
    } else if (this.state.newUser === true ){
      return <LogIn
                input={this.state.input}
                handleLogInInput={this.handleLogInInput}/>
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
