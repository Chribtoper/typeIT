import React from 'react'
import Word from '../components/Word'
import BadWord from '../components/BadWord'
import NextWord from '../components/NextWord'

export default class WordContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      finishedWords: [],
      nextWord: null,
    }
  }

  componentDidUpdate(){
    const finishedWords = this.props.givenTextWords.map((word,index)=>{
      return <NextWord word={word} key={`N${index}`} />
    })
    if (this.state.finishedWords.length === 0){ // TODO: Refactor this incase props.givenTextWords changes
      this.setState({finishedWords})
    }

  }

  renderWords = () => {
    return this.state.finishedWords.slice(this.props.index, this.props.index+3)
  }

  render() {
    return (
      <div>{this.renderWords()}</div>
    )
  }
}
