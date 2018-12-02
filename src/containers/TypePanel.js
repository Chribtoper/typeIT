import React from 'react'
import WordContainer from './WordContainer'
import Word from '../components/Word'
import BadWord from '../components/BadWord'

class TypePanel extends React.Component {

  state = {
    input: '',
    givenTextCharArray: null,
    givenTextWords: null,
    givenText: "Thought I'd end up with Sean But he wasn't a match Wrote some songs about Ricky Now I listen and laugh Even almost got married and for Pete, I'm so thankful Wish I could say, 'Thank you' to Malcolm",
    myArray: [],
    validWords: null,
    badWords: null,
    currentWordComponent: null,
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
        badWords: null,
        currentWordComponent: <Word key={index} input={input} />
      })
    } else {
      this.setState({
        validWords: null,
        badWords: input,
        currentWordComponent: <BadWord key={index} input={input} />
      })
    }
  }

  showCurrentWord = () => {

  }

  render(){

    return(
      <div>
      <p>
        {this.state.givenText}
      </p>

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
