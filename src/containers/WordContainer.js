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

  static getDerivedStateFromProps(props, state) {
     if (props.songSelected) {
       return {
         finishedWords: props.givenTextWords.map((word,index)=>{
           return <NextWord index={props.index} word={word} id={index} key={`N${index}`} />
         }) }
     } else {
       return null
     }
   }


  renderWords = () => {
    return this.state.finishedWords.slice(this.props.index, this.props.index+5)
  }

  render() {
    return (
      <div>{this.renderWords()}</div>
    )
  }
}
