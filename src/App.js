import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent'
import Header from './components/Header'
import TypePanel from './components/TypePanel'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <TypePanel />
      </div>
    )
  }
}

export default App;
