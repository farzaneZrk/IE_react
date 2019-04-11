import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './userProfile.scss';

export default class UserProfile extends Component {
  componentWillMount() {
    document.title = 'My Account';
  }
    
  render() {
    return (
      <div>
        <div className="navbar">
          <img src={require('./images/logo/logo v1.png')} className="logoimg" />
          <a href="#exit"><i className="fa fa-fw fa-user"></i>خروج</a>
          <a href="/profile"><i className="fa fa-fw fa-user"></i>حساب کاربری</a>
        </div>

        <div className="toplightbluelineup">
          <hr id="shortLine2" />
          <hr id="shortLine3" />
        </div>

        <div className="profilenameAndPic">
          <span dir="rtl" id="name">نام و نام خانوادگی</span><br />
          <span dir="rtl" id="userName">نام کاربری</span>
          <img src={require('./images/c.png')} alt="profile image" id="profileImage2" />
          <img src={require('./images/b.png')} alt="profile image" id="profileImage3" />
        </div>

        <div id="userDesc">
          <p dir="rtl">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر مکمل آموزش حضوری میداند لذا لازم به توضیح است که سامانه آی کورسرا با استفاده از تولید محتواهای تعاملی با امکان شرکت در مباحث آموزشی به صورت غیرهمزمان و پاسخ به سوالات استاد فضای آموزش حضوری را در قالب محتوای الکترونیک شبیه سازی میکند</p>
        </div> 
        
        <div className="ifelsediv" dir="rtl">
          <label dir="rtl">مهارت‌ها: </label>
          <div className="selector-button">
            <select id="selcolor">
              <option id="default-option">--  انتخاب مهارت  -- </option>
              <option value="Android">Android</option>
              <option value="C++">C++</option>
            </select>
            <button className="add-skill-button">افزودن مهارت</button>
          </div>
        </div> 

        <div className="skill-card-row">
          <div className="skill-card-column">
            <div className="skill-card">
              <p>HTML<button className="endorse-button blue-botton">5</button></p>
            </div>
          </div>
          <div className="skill-card-column">
            <div className="skill-card">
              <p>CSS<button className="endorse-button blue-botton">3</button></p>
            </div>
          </div>
          <div className="skill-card-column">
            <div className="skill-card">
              <p>javascript<button className="endorse-button blue-botton">16</button></p>
            </div>
          </div>
          <div className="skill-card-column">
            <div className="skill-card">
              <p>typescript<button className="endorse-button red-botton">-</button></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

