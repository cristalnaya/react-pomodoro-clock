import React, { Component } from 'react'

class StartButton extends Component {
  render() {
    return (
      <div>
        <button id="start_stop" onClick={this.props.startSession}>start/stop</button>
        <button id="reset">reset</button>
      </div>
    )
  }
}

export default StartButton;