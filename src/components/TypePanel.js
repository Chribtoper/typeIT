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
    validWords: [],
    badWords: [],
    tempChars: [],
    i: 0
  }

  componentDidMount() {
    this.setState({
      givenTextWords: this.state.givenText.split(" "),
      givenTextCharArray: this.state.givenText.split(" ").map(word=>word.split(''))
    })
  }

  handleInput = (input) => {
    this.setState({
      input: input,
      tempChars: [input.split('')],
      // i: this.state.i+1
      // if input equals given text then set state
      // if input !equal given text then set state
      // if input(keyDown) equals backspace => then change state appropriately
      // if input keydown equals spacebar => change state appropriately
    }, () => console.log(this.state.input.split('')[this.state.i-1])
  )}

  // compareCharacter = (arr, input) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (tempChars[i] === givenText[i] ) {
  //       return 'yay'
  //     } else {
  //       return 'poopy'
  //     }
  //   }
  // }


  render(){


    return(
      <div>
      <p></p>
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
