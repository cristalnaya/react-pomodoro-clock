import React, { Component } from 'react'

class LengthControl extends Component {
  render() {
    const { minSession, incrementSession, decrementSession, minBreak, incrementBreak, decrementBreak } = this.props;
    return (
      <div>
        <div className="length-control">
          <div id="break-label">Break Length</div>
          <div className="control-buttons">
            <button 
            id="break-decrement"
            min={minBreak}
            onClick={decrementBreak}
            >-</button>
            <div id="break-length">{minBreak}</div>
            <button 
            id="break-increment"
            min={minBreak}
            onClick={incrementBreak}
            >+</button>
          </div>
        </div>

        <div className="length-control">
          <div id="session-label">Session Length</div>
          <div className="control-buttons">
            <button 
            id="session-decrement"
            minutes={minSession}
            onClick={decrementSession}
            >-</button>
            <div id="session-length">{minSession}</div>
            <button 
            id="session-increment"
            minutes={minSession}
            onClick={incrementSession}
            >+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LengthControl;