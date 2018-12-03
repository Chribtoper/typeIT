import React from 'react'
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
    if (this.state.finishedWords.length === 0){
      const finishedWords = this.props.givenTextWords.map((word,index)=>{
        return <NextWord index={this.props.index} word={word} id={index} key={`N${index}`} />
      })
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
