import React from 'react'

class TypePanel extends React.Component {

  state = {
    input: [],
    givenText: ["Thought I'd end up with Sean But he wasn't a match Wrote some songs about Ricky Now I listen and laugh Even almost got married and for Pete, I'm so thankful Wish I could say, 'Thank you' to Malcolm"],
    currentGivenWord: '',
    lastGivenWord: '',
    justTypedWord: ''
  }

  handleInput = (input) => {
    this.setState({
      input: input
    })
  }



  render(){
    console.log(this.state.givenText[0].split(''))

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
              onChange={ event => this.handleInput(event.target.value)}
              onChange={ () => this.compareWords}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }

 }

export default TypePanel
