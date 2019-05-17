    import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home/home';
import Login from './views/Authentication/Login/login';
import UserProfile from './views/Profile/UserProfile/userProfile';
import OtherUserProfile from './views/Profile/OtherUserProfile/otherUserProfile';
import Register from './views/Authentication/Register/register';
import Project from './views/Project/project';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers';


// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/projects/:projectId" component={Project} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/users/:userId" component={OtherUserProfile} />
      </div>
    </Router>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
