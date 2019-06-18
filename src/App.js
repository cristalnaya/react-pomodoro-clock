import React, { Component } from 'react';
import './App.css';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';
import StartButton from './components/StartButton';

let start = '';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       breakOn: false,
       sessionOn: false,
       minutes: 25,
       seconds: 0,
       minSession: 25,
       minBreak: 5,
    }
    this.audio = React.createRef();
    this.incrementSession = this.incrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
  }

  incrementSession = () => {
    const { minSession } = this.state;
    this.setState({
          minSession: minSession !== 60 ? minSession + 1 : 60,
          minutes: minSession !== 60 ? minSession + 1 : 60
    });
  }

  incrementBreak = () => {
    const { minBreak } = this.state;
    this.setState({
      minBreak: minBreak !== 60 ? minBreak + 1 : 60
    });
  }

  decrementSession = () => {
    const { minSession } = this.state;
    this.setState({
      minSession: minSession !== 1 ? minSession - 1 : 1,
      minutes: minSession !== 1 ? minSession - 1 : 1
    });
  }

  decrementBreak = () => {
    const { minBreak } = this.state;
    this.setState({
      minBreak: minBreak !== 1 ? minBreak - 1 : 1
    })
  }
  
  resetSession = () => {
    this.setState({
      breakOn: false,
      sessionOn: false,
      minutes: 25,
      seconds: 0,
      minSession: 25,
      minBreak: 5,
    });
    clearInterval(start);
    this.audio.current.pause();
    this.audio.current.currentTime = 0;
  }

  startSession = () => {
    this.setState({
      sessionOn: !this.state.sessionOn 
    });
    if(!(this.state.sessionOn)) {
      start = setInterval(() => {
        if(this.state.seconds === 0 && this.state.minutes !== 0) {
          this.setState({ 
            minutes: this.state.minutes - 1,
            seconds: 59 
          });
        } else if(this.state.seconds !== 0){
          this.setState({ 
            seconds: this.state.seconds - 1 
          });
        }
        else {
          this.audio.current.play();
          this.setState({ 
            minutes: this.state.breakOn ? this.state.minSession : this.state.minBreak,
            seconds: 0,
            breakOn: !this.state.breakOn 
          });
        }
      }, 1000);
    } else {
      clearInterval(start);
    }   
  }
  
  render() {
    const { minSession, minBreak, sessionOn, breakOn, minutes, seconds } = this.state;

    return (
      <div className="App">
       <Timer 
        minutes={minutes}
        seconds={seconds}
        start={breakOn}
       />
       <StartButton
        start={this.startSession}
        reset={this.resetSession}
        startOn={sessionOn}
        setRef={this.audio}
        />
       <LengthControl
        minBreak={minBreak}
        minSession={minSession}
        incrementSession={!sessionOn ? this.incrementSession : null}
        incrementBreak={!sessionOn ? this.incrementBreak : null}
        decrementSession={!sessionOn ? this.decrementSession : null}
        decrementBreak={!sessionOn ? this.decrementBreak : null}
       />
      </div>
    );
  }
}

export default App;
