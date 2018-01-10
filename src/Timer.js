import React, { Component } from 'react';
// import { autobind } from 'core-decorators';
import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 25 * 60 };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({ seconds: this.state.seconds - 1 })
    }

    convertToMinutes(sec) {
        return this.addZero(Math.floor(sec / 60)) + ':' + this.addZero(sec % 60);
    }

    addZero(num) {
        if( num <= 9 ) {
            return '0' + num;
        } else {
            return num;
        }
    }

    doShortBreak() {
        this.setState({ seconds: 5 * 60 })
    }

    doLongBreak() {
        this.setState({ seconds: 10 * 60 })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                <div className="timer__options">
                    <a className="timer__option">Pomodoro</a>
                    <a className="timer__option" onClick={ this.doShortBreak.bind(this) }>Short Break</a>
                    <a className="timer__option" onClick={ this.doLongBreak.bind(this) }>Long Break</a>
                </div>
                <div className="timer__display">
                    { this.convertToMinutes(this.state.seconds) }
                </div>
                <div className="timer__buttons">
                    <a className="timer__btn  timer__btn--start">Start</a>
                    <a className="timer__btn  timer__btn--stop">Stop</a>
                    <a className="timer__btn  timer__btn--reset">Reset</a>
                </div>
            </div>
        );
    }
}

export default Timer;
