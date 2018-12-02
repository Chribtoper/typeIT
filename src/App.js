import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent2 from './containers/MainContent2'
import Header from './components/Header'
import TypePanel2 from './containers/TypePanel2'

class App extends React.Component {
  render() {
    return (
      <div>

        <MainContent2 />
        <TypePanel2 />
      </div>
    )
  }
}

export default App;
