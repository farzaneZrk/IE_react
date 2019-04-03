import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home/home';
import Welcome from './views/Welcome/welcome';
import UserProfile from './views/UserProfile/userProfile';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/userProfile" component={UserProfile} />
      </div>
    </Router>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
