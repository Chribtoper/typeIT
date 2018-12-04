import React from 'react'
import Stats from '../components/Stats'



class MainContent extends React.Component {


  render(){
    return(
      <div>

        <Stats timerStarted={this.props.timerStarted} timer={this.props.timer}/>
      </div>

    )
  }

 }

export default MainContent
