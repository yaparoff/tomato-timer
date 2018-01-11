import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Timer.css';
// import './Timer.css';

class Timer extends Component {

    static propTypes = {
        isActive: PropTypes.bool,
        toggleActive: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.pomodoroTime = 25 * 60;
        this.shortTime = 5 * 60;
        this.longTime = 10 * 60;
        this.state = {
            seconds: this.pomodoroTime,
            isActive: true,
        };
    }

    tick() {
        this.setState({ seconds: this.state.seconds - 1 })
    }

    convertToMinutes(sec) {
        if (this.state.seconds == 0) {
            clearInterval(this.timer);
            return this.addZero(this.state.seconds) + ':' + this.addZero(this.state.seconds); // 00 : 00
        } else {
            const minutes = Math.floor(sec / 60);
            const remainSeconds = sec % 60;
            return this.addZero(minutes) + ':' + this.addZero(remainSeconds);
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
        clearInterval(this.timer);
        this.setState({
            seconds: this.pomodoroTime,
        });

    }

    doShortBreak() {
        clearInterval(this.timer);
        this.setState({ seconds: this.shortTime });
    }

    doLongBreak() {
        clearInterval(this.timer);
        this.setState({ seconds: this.longTime });
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

    toggleActive() {
        const isActive = !this.state.isActive;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { isActive } = this.props;

        return (
            <div className='timer'>
                <div className='timer__options'>
                    <a className={ classNames(
                        'timer__option', {
                            'timer__option--active' : isActive,
                        }
                    )}
                        onClick={ this.doPomodoroBreak.bind(this) }
                    >
                        Pomodoro
                    </a>
                    <a className='timer__option' onClick={ this.doShortBreak.bind(this) }>Short Break</a>
                    <a className='timer__option' onClick={ this.doLongBreak.bind(this) }>Long Break</a>
                </div>
                <div className='timer__display'>
                    { this.convertToMinutes(this.state.seconds) }
                </div>
                <div className='timer__buttons'>
                    <a className='timer__btn  timer__btn--start' onClick={ this.start.bind(this) }>Start</a>
                    <a className='timer__btn  timer__btn--stop' onClick={ this.stop.bind(this) }>Stop</a>
                    <a className='timer__btn  timer__btn--reset' onClick={ this.doPomodoroBreak.bind(this) }>Reset</a>
                </div>
            </div>
        );
    }
}

export default Timer;
