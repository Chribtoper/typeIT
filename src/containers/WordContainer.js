import React from 'react'
import Word from '../components/Word'

export default class WordContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {...props.state}
  }

  showWords = () => {
    debugger
  }

  render() {
    return (
      <div className="WordContainer">
      Render Word components here
      {this.showWords()}
      </div>
    )
  }
}
