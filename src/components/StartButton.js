import React from 'react';

const StartButton = ({ start, reset, startOn, setRef }) => {
    return (
      <div className="buttons-panel">
        <i id="start_stop" className={`fas ${startOn ? 'fa-pause' : 'fa-play'} fa-2x`} onClick={start}></i>
        <i id="reset" className="fas fa-redo-alt fa-2x" onClick={reset}></i>
        <audio 
          id="beep" 
          src="audio/beep.wav" 
          preload='auto' 
          ref={setRef}
        />
      </div>
    )
}

export default StartButton;