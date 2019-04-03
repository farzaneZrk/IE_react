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
        <p>Hello world in userProfile</p>
        <footer>
        <p>تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد &copy;</p>
        </footer>
      </div>
    );
  }
}

