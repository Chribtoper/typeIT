import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './containers/MainContent'
import Header from './components/Header'
import TypePanel from './components/TypePanel'
import Timer from './components/Timer'

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
        <Timer />

      </div>
    )
  }
}

export default App;
