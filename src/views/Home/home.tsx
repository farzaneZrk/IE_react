import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../services/error-handler-service';
import './../../styles/base.scss';
import './home.scss';
import TopLightComponent from "./TopLightComponent";
import NavBar from '../components/NavBar'
import ProjectListBody from "./ProjectListBody";

export default class Home extends Component<Props, State> {
    getProjectsData = () => {
        axios.create({
            baseURL: 'http://localhost:8080/mysite/'
        })
            .get('/projects', {})
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                // console.log(response.data.projects);
                this.setState({ data: response.data.projects});

            });

    };

    constructor(Props: Props) {
        super(Props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        this.getProjectsData();
    };

    // componentWillUnmount = () => {};

    render() {
        const data:[] = this.state.data;

<<<<<<< HEAD
        return (
            <div>
                <NavBar loginReference="./register"/>
                <TopLightComponent/>
                { data.length !== 0 && <ProjectListBody projects={data} /> }
            </div>
        );
    }
=======
  componentWillUnmount = () => {};
  
  render() {
    const { data } = this.state;
    console.log("30");
    return (
      <div>
        <div className="navbar">
          <img src={require('./images/logo/logo v1.png')} className="logoimg" />
          <a href="#exit"><i className="fa fa-fw fa-user"></i>خروج</a>
          <a href="/profile"><i className="fa fa-fw fa-user"></i>حساب کاربری</a>
        </div>

        <div className="toplightblueline" dir="rtl">
          <h1>جاب‌اونجا خوب است!</h1>
          <p>تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط</p>
          <div className="serach-box-button">
            <input className="search-box" />
            <button className="search-button" type="submit">جستجو</button>
          </div>
        </div>

        <div className="projects-and-users container">
          <div className="row">
            <div className="col-sm-9 projects-column">
              <div className="project-block row" dir="rtl">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-right">
                      <img className="projectImage media-object" src={require('./images/d.jpg')} alt="project image" />
                    </div>
                    <div className="project-info media-body">
                      <h6 className="project-title media-heading"><a href="#theProject" className="project-link"><b>پروژه طراحی سایت جاب‌اونجا</b></a><span className="project-deadline">زمان باقی‌مانده: ۱۷:۲۵</span></h6>
                      <p dir="rtl" className="project-description">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر</p>
                      <h4 className="project-budget"><b>بودجه: ۲۵۰۰ تومان</b></h4>
                      <h6 className="project-skills"><b>مهارت‌ها:</b> 
                        <span className="skill-block">HTML</span>
                        <span className="skill-block">CSS</span>
                        <span className="skill-block">JavaScript</span>
                        <span className="skill-block">TypeScript</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div> 
              <div className="project-block row" dir="rtl">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-right">
                      <img className="projectImage media-object" src={require('./images/d.jpg')} alt="project image" />
                    </div>
                    <div className="project-info media-body">
                      <h6 className="project-title media-heading"><a href="#theProject" className="project-link"><b>پروژه طراحی سایت جاب‌اونجا</b></a><span className="project-deadline">زمان باقی‌مانده: ۱۷:۲۵</span></h6>
                      <p dir="rtl" className="project-description">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر</p>
                      <h4 className="project-budget"><b>بودجه: ۲۵۰۰ تومان</b></h4>
                      <h6 className="project-skills"><b>مهارت‌ها:</b> 
                        <span className="skill-block">HTML</span>
                        <span className="skill-block">CSS</span>
                        <span className="skill-block">JavaScript</span>
                        <span className="skill-block">TypeScript</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div> 
              <div className="project-block is-expired row" dir="rtl">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-right">
                      <img className="projectImage media-object" src={require('./images/d.jpg')} alt="project image" />
                    </div>
                    <div className="project-info media-body">
                      <h6 className="project-title media-heading"><a href="#theProject" className="project-link"><b>پروژه طراحی سایت جاب‌اونجا</b></a><span className="missed-deadline">مهلت تمام شده</span></h6>
                      <p dir="rtl" className="project-description">تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را بیشتر</p>
                      <h4 className="project-budget"><b>بودجه: ۲۵۰۰ تومان</b></h4>
                      <h6 className="project-skills"><b>مهارت‌ها:</b> 
                        <span className="skill-block">HTML</span>
                        <span className="skill-block">CSS</span>
                        <span className="skill-block">JavaScript</span>
                        <span className="skill-block">TypeScript</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div className="col-sm-3 users-column">
              <input dir="rtl" className="user-search"/>
              <div className="col-md-12">
                <a className="sth" href="#sth">
                  <div className="user-block media" dir="rtl">
                    <div className="media-right">
                      <img className="user-image media-object" src={require('./images/b.png')} alt="user image" />
                    </div>
                    <div className="user-info media-body">
                      <h5 className="user-name media-heading">صادق حائری</h5>
                      <p dir="rtl" className="user-username">گیک</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a className="sth" href="#sth">
                  <div className="user-block media" dir="rtl">
                    <div className="media-right">
                      <img className="user-image media-object" src={require('./images/b.png')} alt="user image" />
                    </div>
                    <div className="user-info media-body">
                      <h5 className="user-name media-heading">محمد‌رضا کیانی</h5>
                      <p dir="rtl" className="user-username">چیف تی‌ای</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a className="sth" href="#sth">
                  <div className="user-block media" dir="rtl">
                    <div className="media-right">
                      <img className="user-image media-object" src={require('./images/b.png')} alt="user image" />
                    </div>
                    <div className="user-info media-body">
                      <h5 className="user-name media-heading">آبتین باطنی</h5>
                      <p dir="rtl" className="user-username">توسعه‌دهنده‌ی فرانت‌اند</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a className="sth" href="#sth">
                  <div className="user-block media" dir="rtl">
                    <div className="media-right">
                      <img className="user-image media-object" src={require('./images/b.png')} alt="user image" />
                    </div>
                    <div className="user-info media-body">
                      <h5 className="user-name media-heading">کاربر ناشناس</h5>
                      <p dir="rtl" className="user-username">دانشجو</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
>>>>>>> dbbbb77dd53ee9ea7eec95afab909bcbf9ab0a3a
}

interface State {
    data: [];
}

interface Props {}