import React, { Component } from 'react';
// import { autobind } from 'core-decorators';
import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 25 };
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

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                { this.state.seconds }
            </div>
        );
    }
}

export default Timer;
