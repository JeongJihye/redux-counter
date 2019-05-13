import React, { Component } from 'react';
//import Counter from './Counter.js';
import CounterContainer from '../containers/CounterContainer.js';

class App extends Component {
    render() {
        return (
            <div>
                 <CounterContainer/>
            </div>
        )
    }
}

export default App;