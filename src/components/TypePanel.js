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
    tempChars: [],
    index: 0
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
      tempChars: input.split(''),
    }, this.compareCharacter()
  )}

  handleCorrectWord = () => {
    
  }

  compareCharacter = () => {
    const tempCharString = this.state.tempChars.join("")
    const givenCharString = this.state.givenTextCharArray[this.state.index].slice(0, this.state.tempChars.length).join("")
    if (tempCharString === givenCharString){
      this.setState({
        validWords: tempCharString,
        badWords: null
      })
    } else {
      this.setState({
        validWords: null,
        badWords: tempCharString
      })
    }
  }
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
