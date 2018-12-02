import React from 'react'
import Stats from '../components/Stats'
import LoadView from '../components/LoadView'
//import { Grid, Segment, Input } from 'semantic-ui-react'


class MainContent extends React.Component {

  render(){
    return(
      <div className='ui divided one column grid'>
        <div className='stretched row'>
          <div className='column'>
            <div className='ui segment'>1</div>
            <div className='ui segment'>2</div>
            <div className='ui segment'>3</div>
            <div className='ui segment'>4</div>
            <div className='ui segment'>5</div>
            <div className='ui segment'>6</div>
          </div>
        </div>
      </div>

    )
  }

 }

export default MainContent
