import React, { Component } from 'react';
import './../../styles/base.scss';
import './welcome.scss';
import DangerButton from './Components/DangerButton'; // Import a component from another file

export default class UserProfile extends Component {
    
  render() {
    console.log("30");
    return (
      <div>
        <p className="welcomeText">به زیبایی هرچه تمام تر، به جاب‌اونجا خوش آمدید<br/><a href="/home">برای ورود کلیک کنید</a></p>
        <DangerButton msg="click here!" styles={{backgroundColor: 'red'}}  />
        <footer>
          <p>تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد &copy;</p>
        </footer>
      </div>
    );
  }
}
