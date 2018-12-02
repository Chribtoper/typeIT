import React from 'react'
import Word from '../components/Word'
import BadWord from '../components/BadWord'
import NextWord from '../components/NextWord'

export default class WordContainer extends React.Component {

  state = {
    words: []
  }

  render() {
    return (
      <span>{this.props.allSubmittedWords}</span>
    )
  }
}
