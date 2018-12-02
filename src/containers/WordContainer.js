import React from 'react'
import Word from '../components/Word'

export default class WordContainer extends React.Component {

  state = {
    words: []
  }

  showWords = () => {

  }

  createWord = () => {

  }

  render() {
    return (
      <div className="WordContainer">
      Render Word components here
      {this.showWords()}
      </div>
    )
  }
}
