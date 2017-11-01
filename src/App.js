import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import './reset.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Landing} exact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
