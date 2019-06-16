import React, { Component } from 'react';
import './App.css';
// import ms from 'pretty-ms';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';
import StartButton from './components/StartButton';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       time: 0,
       start: 0,
       show: true,
       seconds: '00',
       minSession: '25',
       minBreak: '5',
    }
    this.handleChange = this.handleChange.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      minSession: event.target.value,
      minBreak: event.target.value,
    });
  }

  incrementSession = () => {
    const { minSession } = this.state;
    this.setState({
          minSession: Math.floor(parseInt(minSession)) + 1,
    });
  }

  incrementBreak = () => {
    const { minBreak } = this.state;
    this.setState({
          minBreak: Math.floor(parseInt(minBreak)) + 1
    })
  }

  decrementSession = () => {
    const { minSession } = this.state;
    this.setState({
      minSession: Math.floor(parseInt(minSession)) - 1,
    })
  }

  decrementBreak = () => {
    const { minBreak } = this.state;
    this.setState({
      minBreak: Math.floor(parseInt(minBreak)) - 1
    })
  }
  
  render() {
    const { minSession, seconds, minBreak } = this.state;

    return (
      <div className="App">
       <Timer 
       minSession={minSession}
       seconds={seconds}
       />
       <StartButton />
       <LengthControl
       minBreak={minBreak}
       minSession={minSession}
       onChange={this.handleChange}
       incrementSession={this.incrementSession}
       incrementBreak={this.incrementBreak}
       decrementSession={this.decrementSession}
       decrementBreak={this.decrementBreak}
       />
      </div>
    );
  }
}

export default App;

