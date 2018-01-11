import React, { Component } from 'react';
// import { autobind } from 'core-decorators';
import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 25 * 60 };
    }

    tick() {
        this.setState({ seconds: this.state.seconds - 1 })
    }

    convertToMinutes(sec) {
        if (this.state.seconds == 0) {
            clearInterval(this.timer);
            return this.addZero(this.state.seconds) + ':' + this.addZero(this.state.seconds); // 00 : 00
        } else {
            return this.addZero(Math.floor(sec / 60)) + ':' + this.addZero(sec % 60);
        }
    }

    addZero(num) {
        if( num <= 9 ) {
            return '0' + num;
        } else {
            return num;
        }
    }

    doPomodoroBreak() {
        this.setState({ seconds: 25 * 60 });
    }

    doShortBreak() {
        this.setState({ seconds: 2 });
    }

    doLongBreak() {
        this.setState({ seconds: 10 * 60 });
    }

    start() {
        if (this.state.seconds == 0) {
            this.doPomodoroBreak();
        }
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    stop() {
        clearInterval(this.timer);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                <div className="timer__options">
                    <a className="timer__option" onClick={ this.doPomodoroBreak.bind(this) }>Pomodoro</a>
                    <a className="timer__option" onClick={ this.doShortBreak.bind(this) }>Short Break</a>
                    <a className="timer__option" onClick={ this.doLongBreak.bind(this) }>Long Break</a>
                </div>
                <div className="timer__display">
                    { this.convertToMinutes(this.state.seconds) }
                </div>
                <div className="timer__buttons">
                    <a className="timer__btn  timer__btn--start" onClick={ this.start.bind(this) }>Start</a>
                    <a className="timer__btn  timer__btn--stop" onClick={ this.stop.bind(this) }>Stop</a>
                    <a className="timer__btn  timer__btn--reset" onClick={ this.doPomodoroBreak.bind(this) }>Reset</a>
                </div>
            </div>
        );
    }
}

export default Timer;
