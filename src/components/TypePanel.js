import React from 'react'

class TypePanel extends React.Component {

  state = {
    input: '',
    givenTextCharArray: null,
    givenTextWords: null,
    givenText: "Thought I'd end up with Sean But he wasn't a match Wrote some songs about Ricky Now I listen and laugh Even almost got married and for Pete, I'm so thankful Wish I could say, 'Thank you' to Malcolm",
    myArray: [],
    tempyArray: [],
    validChars: [],
    badChars: [],
    validWords: null,
    badWords: null,
    index: 0
  }

  componentDidMount() {
    this.setState({
      givenTextWords: this.state.givenText.split(" "),
      givenTextCharArray: this.state.givenText.split(" ").map(word=>word.split(''))
    })
  }

  handleInput = (input) => {
    if (input[input.length-1]===" "){
      this.handleWordLockIn(input, this.state.index, this.state.myArray)
    } else {
      this.setState({
        input: input,
      }, this.compareCharacter(input, this.state.index)
  )}
  }

  handleWordLockIn = (input, index, myArray) => {
    this.setState({
      index: index+1,
      myArray: [...myArray, input]
    })
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

    console.log(this.state.givenText[0].toLowerCase().split('')[this.state.i-1]);


    return(
      <div>
      <p>{console.log(this.state.givenText)}</p>
      <p>
        {this.state.givenText}
      </p>
        <form>
          <label>
            TypeIT:
            <input
              type="text"
              onChange={ (event) => this.handleInput(event.target.value)}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }

 }

export default TypePanel
