import React, { Component } from 'react';
import Timer from './Timer'
import './App.css';

class App extends Component {

    signIn() {

    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="header__title">Tomato timer</h1>
                    <a className="sign-link" onClick={ this.signIn }>Sign in</a>
                </header>
                <main>
                    <Timer />
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
