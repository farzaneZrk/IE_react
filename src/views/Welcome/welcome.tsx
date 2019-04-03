import React, { Component } from 'react';
import './../../styles/base.scss';
import './welcome.scss';

export default class UserProfile extends Component {
    
  render() {
    console.log("30");
    return (
      <div>
        <p className="welcomeText">به جاب‌اونجا خوش آمدید <br/><a href="/home">برای ورود کلیک کنید</a></p>
        <footer>
          <p>تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد &copy;</p>
        </footer>
      </div>
    );
  }
}
