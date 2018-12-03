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

  componentDidMount(){
    this.setState({
      finishedWords: this.props.givenTextWords.map((word,index)=>{
        debugger
        return <NextWord word={word} key={`N${index}`} />
      })
    })
  }

  renderWords = () => {
    return this.state.finishedWords.slice(0, this.props.index)
  }

  render() {
    return (
      <div>{this.renderWords()}</div>
    )
  }
}
