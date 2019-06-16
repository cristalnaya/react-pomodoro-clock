import React, { Component } from 'react'

class LengthControl extends Component {
  render() {
    const { minSession, onChange, incrementSession, decrementSession, minBreak, incrementBreak, decrementBreak } = this.props;
    return (
      <div>
        <div className="length-control">
          <div id="break-label">Break Length</div>
          <button 
          id="break-decrement"
          min={minBreak}
          onChange={onChange}
          onClick={decrementBreak}
          >-</button>
          <div id="break-length" onChange={onChange}>{minBreak}</div>
          <button 
          id="break-increment"
          min={minBreak}
          onClick={incrementBreak}
          >+</button>
        </div>

        <div className="length-control">
          <div id="session-label">Session Length</div>
          <button 
          id="session-decrement"
          minutes={minSession}
          onClick={decrementSession}
          >-</button>
          <div id="session-length" onChange={onChange}>{minSession}</div>
          <button 
          id="session-increment"
          minutes={minSession}
          // onChange={onChange}
          onClick={incrementSession}
          >+</button>
        </div>
      </div>
    )
  }
}

export default LengthControl;