import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minute: 0,
            seconds: 0,
            counter: 1,
            intervalId: 0
        };
    };

    stopTimer() {
        clearInterval(this.state.intervalId);
    }

    reset() {
        this.setState({
            minute: 0,
            seconds: 0,
            counter: 1
        })
    }

    startTimer() {
        
        this.state.intervalId = setInterval(() => {
                const secondCounter = this.state.counter % 60;
                const minuteCounter = Math.floor(this.state.counter / 60);
                  
                this.setState({
                    minute: minuteCounter,
                    seconds: secondCounter,
                    counter: this.state.counter + 1
                });
            }, 1000)
    }

    render() {
        return (
            <div className="container">
                <div className="timerDiv">
                    <span className="minute">{this.state.minute}</span>
                    <span>:</span>
                    <span className="second">{this.state.seconds}</span>
                </div>
                <span className="buttonSpan">
                    <Button variant="contained" color="primary" size="large" className="start" onClick={this.startTimer.bind(this)}>
                        START
                    </Button>
                    <Button variant="contained" color="primary" size="large" className="stop" onClick={this.stopTimer.bind(this)}>
                        STOP
                    </Button>
                    <Button variant="contained" color="primary" size="large" className="reset" onClick={this.reset.bind(this)}>
                        RESET
                    </Button>
                </span>
            </div>
        )
    };
}

export default Timer;