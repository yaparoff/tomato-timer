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
        return this.addZero(Math.floor(sec / 60)) + ' : ' + this.addZero(sec % 60);
    }

    addZero(num) {
        if( num <= 9 ) {
            return '0' + num;
        } else {
            return num;
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                { this.convertToMinutes(this.state.seconds) }
            </div>
        );
    }
}

export default Timer;
