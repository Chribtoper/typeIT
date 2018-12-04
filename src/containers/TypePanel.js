import React from 'react'
import WordContainer from './WordContainer'
import Word from '../components/Word'
import BadWord from '../components/BadWord'

class TypePanel extends React.Component {

  state = {
    input: '',
    givenTextCharArray: [],
    givenTextWords: [],
    givenText: "hello shawna whats up",
    allSubmittedWords: [],
    validWords: null,
    badWords: null,
    currentWordComponent: null,
    index: 0,
    selectedSongTP: null
  }

  componentDidMount() {
    this.setState({
      givenTextWords: this.state.givenText.split(" "),
      givenTextCharArray: this.state.givenText.split(" ").map(word=>word.split(''))
    }, ()=> {this.props.grabState(this.state)})
  }

  handleInput = (e, index, allSubmittedWords, givenTextWords) => {
    let input = e.target.value
    if (input[input.length-1]===" "&&input!==" ") {
      this.handleWordLockIn(input, index, allSubmittedWords, e); this.props.grabState(this.state)
    } else if (input === " ") {
      e.target.value = ""
    } else {
      this.setState({
        input: input,
      }, () => {
          this.compareCharacter(input, index)
        this.props.grabState(this.state)
      }
    )}
  }

  handleWordLockIn = (input, index, allSubmittedWords, e) => {
    this.setState({
      allSubmittedWords: [...allSubmittedWords, this.state.currentWordComponent],
      index: index+1,
      currentWordComponent: null
    },  ()=> {this.props.grabState(this.state)})
    e.target.value = ""
  }

  compareCharacter = (input, index) => {
    const tempCharString = input
    const givenCharString = this.state.givenTextCharArray[index].slice(0, input.length).join("")
    if (tempCharString === givenCharString){
      this.setState({
        validWords: input,
        badWords: null,
        currentWordComponent: <Word key={index} input={input} />
    },  ()=> {this.props.grabState(this.state)})
    } else {
      this.setState({
        validWords: null,
        badWords: input,
        currentWordComponent: <BadWord key={index} input={input} />
    },  ()=> {this.props.grabState(this.state)})
    }
  }

  static getDerivedStateFromProps(props, state) {
     if (props.songSelected) {
       return {
         givenText: props.songSelected.body,
         givenTextWords: props.songSelected.body.split(" "),
         givenTextCharArray: props.songSelected.body.split(" ").map(word=>word.split(''), ()=> {this.props.grabState(this.state)})
       }
     } else {
       return null
     }
   }

  render(){

    return(
      <div className="Page">
          <div className="RightContainer">
            <WordContainer
              index={this.state.index}
              givenTextWords={this.state.givenTextWords}
              amountOfWords={this.state.givenTextWords.length}
              songSelected={this.props.songSelected}
            />
          </div>
          <div className="LeftContainer">
            {this.state.allSubmittedWords}
            <span id="CurrentWord">
              {this.state.currentWordComponent}
            </span>
          </div>
        <div className="FormDiv">
            <form className="InputForm">
              <input
                className="InputField"
                ref={input=>input&&input.focus()}
                type="text"
                onChange={ (e) => this.handleInput(e, this.state.index, this.state.allSubmittedWords, this.state.givenTextWords)}
              />
            </form>
        </div>
      </div>
    )
  }

 }

export default TypePanel
