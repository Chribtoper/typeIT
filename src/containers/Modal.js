import React from 'react'


class Modal extends React.Component{




  render(){
    return(
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
          <span className="close">&times;</span>
            <h2 className="modal-header-congrats">Congratulations! You Rock!</h2>
          </div>
          <div className="modal-body">
            <h1 className='modal-text-h1'>Here are your Type Stats!</h1>
            <h2 className='modal-text-h2'>{this.props.appState.wpm} Words Per Minute</h2>
            <h2 className='modal-text-h2'>{this.props.appState.cpm} Characters Per Minute</h2>
            <h2 className='modal-text-h2'>{this.props.appState.accuracy} Accuracy</h2>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    )
}


 }

export default Modal
