import React from 'react'


class Modal extends React.Component{




  render(){
    return(
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Congratulations! You Typed {this.props.appState.wpm} Words Per Minute </h2>
          </div>
          <div className="modal-body">
            <p>CPM: {this.props.appState.cpm}</p>
            <p>Accuracy: {this.props.appState.accuracy} %</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    )
}


 }

export default Modal
