import React from 'react'

const Timer = ({ minutes, seconds, start }) => {
    return (
      <div>
        <h1>Pomodoro Clock</h1>
        <div className="timer">
          <div id="timer-label">{start ? 'Rest' : 'Focus'}</div>
          <div id="time-left">{minutes < 10 ? '0' + minutes : minutes}:{seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds}</div>
        </div>
      </div>
    )
}

export default Timer;