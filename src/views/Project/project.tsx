import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './project.scss';
import NavBar from '../components/NavBar'
import Toplightblueline from '../components/Toplightblueline';
import SkillCardRow from '../components/SkillCardRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Project extends Component<props, state> {
  projectId:string;

  getProjectData = () => {
    console.log(this.projectId)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    instance.get('/projects?', {
      params: {
        projectId: this.projectId
      }
    })
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      console.log(response.data)
      var myObj = response.data;
      this.setState({ title: myObj.title});
      this.setState({ budget: myObj.budget });
      this.setState({ description: myObj.description });
      this.setState({ imageURL: myObj.imageURL });
      this.setState({ deadline: myObj.deadline });
      this.setState({ hasBid: myObj.hasBid });
      this.setState({ isExpired: myObj.isExpired });
      console.log(myObj.skills)
      this.parseSkills(myObj.skills)
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  parseSkills = (skillsJson:any[]) =>{
    let sl: Skill[] = [];
    skillsJson.forEach(element => {
      sl.push(
        { name: element.name, point: element.point }
      );
    });
    console.log(sl)
    this.setState({skills: sl})

  }
  
  constructor(props: props) {
    super(props);
    const { projectId } = this.props.match.params
    this.projectId = projectId;
    this.state = {
      title: '',
      budget: 0,
      imageURL: '',
      description: '',
      deadline: '',
      skills: [],
      hasBid: false,
      isExpired: false,
    };
  }
  
  componentWillMount() {
    document.title = 'Project';
  }

  componentDidMount = () => {
    this.getProjectData();
    const { projectId } = this.props.match.params
    this.projectId = projectId;
  };

    
  render() {
    var lastPart
    if (this.state.hasBid){
      lastPart = 
        <div>
          <h4 id="status">
            <span className="flaticon-check-mark" />
            شما قبلا پیشنهاد خود را ثبت کرده‌اید
          </h4>
        </div>  
      
    }
    else if(this.state.isExpired){
      lastPart = 
        <div>
          <h4 id="status">
            <span className="flaticon-danger" />
            مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!
          </h4> 
        </div>
    }
    else{
      lastPart =
        <div>
          <h3 id="label">ثبت پیشنهاد</h3>
          <div className="input-box">
            <input value="" placeholder="پیشنهاد خود را وارد کنید" className="price-box" />
            <span className="unit" dir="ltr">تومان</span>
            <button className="send-button" type="submit">ارسال</button>
          </div>
        </div>
    }
    return (
      <div>
        <NavBar/>
        <Toplightblueline marginTop="-2%" padding="3.5%" />

        <div className="project-info" dir="rtl">
          <div className="row" id="top-info">
            <div className="col-md-12">
              <div className="media">
                <div className="media-right">
                  <img className="media-object" src={require('./images/d.jpg')}  alt="project image" id="projectImage" />
                </div>
                <div className="media-body">
                <h1 className="media-heading" id="priojrct-name"><b>{this.state.title}</b></h1>
                <h4 id="deadline"><span className="flaticon-deadline"></span><b>زمان باقی‌مانده:</b> ۱۷ دقیقه و ۲۵ ثانیه</h4>
                <h4 id="budget"><span className="flaticon-money-bag"></span><b>بودجه: {this.state.budget} تومان</b></h4>
                <h3 id="desc">توضیحات</h3>
                <p dir="rtl" id="project-description">{this.state.description}</p>
                </div>
              </div>
              <h3 id="desc2"><b>توضیحات</b></h3>
              <p dir="rtl" id="project-description2">{this.state.description}</p>
            </div>
          </div>
          <div className="row requairement-row" dir="rtl">
            <div className="col-md-12">
              <h3 id="req"><b>مهارت‌های لازم:</b></h3>
              { this.state.skills.length !== 0 && 
                <SkillCardRow
                  skills={this.state.skills}
                  onClick={this.getProjectData}
                  buttonTitle="!حذف مهارت"
                  class="remove-button blue-botton"
                  style={{marginLeft: '0%'}}
                />
              }
            </div>
          </div>
          {lastPart}
        </div>
      </div>
    );
  }
}


interface state {
  title: string;
  budget: number;
  imageURL: string;
  description: string;
  deadline: string;
  skills: Skill[];
  hasBid: boolean;
  isExpired: boolean;
}

interface Skill{
  name: string;
  point: number;
}

interface props {
  match: any;
}

