import React from 'react'
import Word from '../components/Word'
import BadWord from '../components/BadWord'
import NextWord from '../components/NextWord'

export default class WordContainer extends React.Component {

  state = {
    finishedWords: [],
    nextWord: null,
    amountOfWords: null
  }

  renderWords = () => {
    this.setUpFinishedWords(this.props.givenTextWords)
    for(let i = 0; i < this.props.index; i++){
      return this.state.finishedWords[i]
    }
  }

  setUpFinishedWords = (givenTextWords) => {
    const finishedWords = givenTextWords.map()
    this.setState()
  }

  render() {
    return (
      <div></div>
    )
  }
}
