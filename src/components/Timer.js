import React, { Component } from 'react'

class Timer extends Component {
  
  
  render() {
    const { minSession, seconds } = this.props;
    return (
      <div>
        <div id="timer-label">Time to Focus!</div>
        <div id="timer-left">{minSession} : {seconds}</div>
      </div>
    )
  }
}

export default Timer;