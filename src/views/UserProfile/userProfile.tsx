import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './userProfile.scss';

export default class UserProfile extends Component {
    
  render() {
    console.log("30");
    return (
      <div>
        <div className="navbar">
          <img src={require('./../Login/images/logo/logo v1.png')} className="logoimg" />
          <a href="#exit"><i className="fa fa-fw fa-user"/>خروج</a>
          <a href="/html/profile-page.html"><i className="fa fa-fw fa-user"></i>حساب کاربری</a>
        </div>
        {/* <br/><br/><br/><br/><br/><br/> */}
        <p>Hello world in userProfile</p>
      </div>
    );
  }
}

