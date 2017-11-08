import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Search from './components/Search/Search.js';
import Profile from './components/Profile/Profile.js';
import Post from './components/Post/Post.js';
import Journal from './components/Journal/Journal.js';
import EditProfile from './components/EditProfile/EditProfile.js';
import './reset.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Landing} exact />
          <Route path='/search' component={Search} />
          <Route path='/profile' component={Profile} />
          <Route path='/newjournal' component={Post} />
          <Route path='/journal' component={Journal} />
          <Route path='/editprofile' component={EditProfile} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
