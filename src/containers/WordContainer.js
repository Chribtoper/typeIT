import React from 'react'
import Word from '../components/Word'

export default class TypePanel extends React.Component {

  constructor(props) {
    super(props)
  }

  showWords = () => {
    
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
