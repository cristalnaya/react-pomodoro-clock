import React, { Component } from 'react'

class Timer extends Component {
  
  
  render() {
    const { minutes, seconds, start } = this.props;
    return (
      <div>
        <h1>Pomodoro Timer</h1>
        <div className="timer">
          <div id="timer-label">{start ? 'Rest' : 'Focus'}</div>
          <div id="time-left">{minutes < 10 ? '0' + minutes : minutes}:{seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds}</div>
        </div>
      </div>
    )
  }
}

export default Timer;