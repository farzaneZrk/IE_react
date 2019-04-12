import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './project.scss';

export default class Project extends Component {
  componentWillMount() {
    document.title = 'Project';
  }
    
  render() {
    return (
      <div>
        <div className="navbar">
          <img src={require('./images/logo/logo v1.png')} className="logoimg" />
          <a href="#exit"><i className="fa fa-fw fa-user"></i>خروج</a>
          <a href="/profile"><i className="fa fa-fw fa-user"></i>حساب کاربری</a>
        </div>

        <div className="toplightblueline" />

        <div className="project-info" dir="rtl">
          <div className="row" id="top-info">
            <div className="col-md-12">
              <div className="media">
                <div className="media-right">
                <a href="#">
                  <img className="media-object" src={require('./images/d.jpg')}  alt="project image" id="projectImage" />
                </a>
                </div>
                <div className="media-body">
                <h1 className="media-heading" id="priojrct-name"><b>پروژه طراحی سایت جاب‌اونجا</b></h1>
                <h4 id="deadline"><span className="flaticon-deadline"></span><b>زمان باقی‌مانده:</b> ۱۷ دقیقه و ۲۵ ثانیه</h4>
                <h4 id="budget"><span className="flaticon-money-bag"></span><b>بودجه: ۲۵۰۰ تومان</b></h4>
                <h3 id="desc">توضیحات</h3>
                <p dir="rtl" id="project-description">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر مکمل آموزش حضوری میداند لذا لازم به توضیح است که سامانه آی کورسرا با استفاده از تولید محتواهای تعاملی با امکان شرکت در مباحث آموزشی به صورت غیرهمزمان و پاسخ به سوالات استاد فضای آموزش حضوری را در قالب محتوای الکترونیک شبیه سازی میکند</p>
                </div>
              </div>
              <h3 id="desc2"><b>توضیحات</b></h3>
              <p dir="rtl" id="project-description2">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر مکمل آموزش حضوری میداند لذا لازم به توضیح است که سامانه آی کورسرا با استفاده از تولید محتواهای تعاملی با امکان شرکت در مباحث آموزشی به صورت غیرهمزمان و پاسخ به سوالات استاد فضای آموزش حضوری را در قالب محتوای الکترونیک شبیه سازی میکند</p>
            </div>
          </div>
          <div className="row requairement-row" dir="rtl">
            <div className="col-md-12">
              <h3 id="req"><b>مهارت‌های لازم:</b></h3>
              <div className="skill-card-row" dir="rtl">
                <div className="skill-card-column">
                  <div className="skill-card">
                    <button className="endorse-button blue-botton">5</button><span>HTML</span>
                  </div>
                </div>
                <div className="skill-card-column">
                  <div className="skill-card">
                    <button className="endorse-button blue-botton">3</button><span>CSS</span>
                  </div>
                </div>
                <div className="skill-card-column">
                  <div className="skill-card">
                    <button className="endorse-button blue-botton">16</button><span>javascript</span>
                  </div>
                </div>
                <div className="skill-card-column">
                  <div className="skill-card">
                    <button className="endorse-button blue-botton">2</button><span>typescript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 id="label">ثبت پیشنهاد</h3>
          <div className="input-box">
            <input value="" placeholder="پیشنهاد خود را وارد کنید" className="price-box" />
            <span className="unit" dir="ltr">تومان</span>
            <button className="send-button" type="submit">ارسال</button>
          </div>
        </div>
      </div>
    );
  }
}

