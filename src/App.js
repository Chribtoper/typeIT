import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './containers/MainContent'
import Header from './components/Header'
import TypePanel from './containers/TypePanel'

class App extends React.Component {

  state = {
    state: null
  }

  grabState = (state) => {
    this.setState({state})
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <TypePanel grabState={this.grabState}/>
      </div>
    )
  }
}

export default App;
