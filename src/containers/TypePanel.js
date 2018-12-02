import React from 'react'
import WordContainer from './WordContainer'

class TypePanel extends React.Component {

  state = {
    input: '',
    givenTextCharArray: null,
    givenTextWords: null,
    givenText: "Thought I'd end up with Sean But he wasn't a match Wrote some songs about Ricky Now I listen and laugh Even almost got married and for Pete, I'm so thankful Wish I could say, 'Thank you' to Malcolm",
    myArray: [],
    currentString: null,
    validChars: [],
    badChars: [],
    validWords: null,
    badWords: null,
    allWords: [],
    index: 0
  }

  componentDidMount() {
    this.setState({
      givenTextWords: this.state.givenText.split(" "),
      givenTextCharArray: this.state.givenText.split(" ").map(word=>word.split(''))
    })
  }

  handleInput = (e, index, myArray, givenTextWords) => {
    let input = e.target.value
    console.log(input)
    console.log(givenTextWords[index])
    if (input[input.length-1]===" ") {
      this.handleWordLockIn(input, index, myArray, e)
    } else {
      this.setState({
        input: input,
      }, this.compareCharacter(input, index)
    )}
  }

  handleWordLockIn = (input, index, myArray, e) => {
    this.setState({
      myArray: [...myArray, input.replace(/\s/g,'')],
      index: index+1
    })
    e.target.value = ""
  }

  compareCharacter = (input, index) => {
    const tempCharString = input
    const givenCharString = this.state.givenTextCharArray[index].slice(0, input.length).join("")
    if (tempCharString === givenCharString){
      this.setState({
        validWords: input,
        badWords: null
      })
    } else {
      this.setState({
        validWords: null,
        badWords: input
      })
    }
  }

  render(){

    return(
      <div>
      <p>
        {this.state.givenText}
      </p>
        <WordContainer state={this.state} />
        <form>
          <label>
            TypeIT:
            <input
              type="text"
              onChange={ (e) => this.handleInput(e, this.state.index, this.state.myArray, this.state.givenTextWords)}
              />
          </label>
        </form>
      </div>

    )
  }

 }

export default TypePanel
