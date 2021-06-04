import React from 'react';
import './styles.css';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            isTimerRunning: false
        };

        this.timer = undefined;
    };

    onClickStartButton() {

        this.setState({
            isTimerRunning: true
        })

        this.timer = setInterval(() => {
            this.setState({
            time: this.state.time + 1
        })}
        , 1000);

    }

    onClickStopButton() {
        this.setState({
            isTimerRunning: false
        })
        clearInterval(this.timer);
    }

    onClickResetButton() {
        clearInterval(this.timer);
        this.setState({
            time: 0,
            isTimerRunning: false
        })
    }

    render() {
        return (
            <div className="stopwatch_conatiner">
                <div className="showtime_conatiner">
                    {this.state.time}.00
                </div>
                <div className="button_container">
                    <button className="startbtn btn" onClick={this.onClickStartButton.bind(this)}>Start</button>
                    <button className="stopbtn btn" onClick={this.onClickStopButton.bind(this)} >Stop</button>
                    <button className="resetbtn btn"onClick={this.onClickResetButton.bind(this)} >Reset</button>
                </div>
            </div>
        )
    };
}

export default Stopwatch;