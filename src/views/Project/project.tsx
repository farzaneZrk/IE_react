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

  notifySuccess = () => toast.success("پیشنهاد شما با مبلغ " + this.state.price + " تومان ثبت شد.")
  notifyError = (msg:string) =>{
    toast.error(msg);
  } 

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
      this.setState({id: myObj.id});
      console.log(myObj.skills)
      this.parseSkills(myObj.skills)
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  bidProject = () => {
    if(this.state.price === 0)
      return;
    console.log(this.projectId)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded/projects/'
    });

    instance.post('bid?bidAmount=' + this.state.price + '&projectId=' + this.state.id + '&userId=1')
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      console.log(response.data)
      this.notifySuccess();
      this.setState({hasBid: true})
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  hasPersianChar = (s:string) => {
    var PersianOrASCII = /[آ-ی]|([۱-۲-۳-۴-۵-۶-۷-۸-۹])|[a-z]|[A-Z]/;
    if (s.match(PersianOrASCII) !== null)
      return true;
    return false;
  }

  checkPrice = (event: any) => {
    let s = event.target.value;
    if (this.hasPersianChar(s)){
      this.notifyError("لطفا فقط از اعداد انگلیسی استفاده کنید");
    }
  }
  
  setPrice = (event: any) => {
    let price = event.target.value;
    if(this.hasPersianChar(price)){
      this.notifyError("لطفا فقط از اعداد انگلیسی استفاده کنید");
      return;
    }
    if(price < 10000){
      this.notifyError("عدد وارد شده از کوچکترین عدد قابل قبول کوچکتر است!")
      return
    }
    if(price > 1000000000){
      this.notifyError("عدد وارد شده از بزرگترین عدد قابل قبول بزرگتر است!")
      return
    }
    if(price > this.state.budget){
      this.notifyError("عدد وارد شده از بودجه‌ی پروژه بیشتر است!")
      return
    }
      this.setState({price : price});    
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

  convertToPersianNumber = (input:any) => {
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
      return input.replace(/\d/g,function(m:any){
          return persianMap[parseInt(m)];
      });
  }
  
  constructor(props: props) {
    super(props);
    const { projectId } = this.props.match.params
    this.projectId = projectId;
    this.state = {
      id: '',
      title: '',
      budget: 0,
      imageURL: '',
      description: '',
      deadline: '',
      skills: [],
      hasBid: false,
      isExpired: false,
      winner: 'بدون برنده',
      price: 0,
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
    var lastPart;
    var winner;
    if (this.state.hasBid){
      lastPart = 
        <div className="already-bid-status">
          <h4 >
            <span className="flaticon-check-mark" />
            شما قبلا پیشنهاد خود را ثبت کرده‌اید
          </h4>
        </div>  
      
    }
    //
    else if(this.state.isExpired){
      lastPart = 
        <div className="deadline-reached-status">
          <h4>
            <span className="flaticon-danger" />
            مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!
          </h4> 
        </div>
      winner = <h4 className="winner"><span className="flaticon-check-mark"></span>برنده: {this.state.winner}</h4>
    }
    //
    else{
      lastPart =
        <div>
          <h3 id="label">ثبت پیشنهاد</h3>
          <div className="input-box">
            <input 
              dir="ltr"
              placeholder="پیشنهاد خود را وارد کنید"
              className="price-box"
              onChange={this.checkPrice}
              onBlur={this.setPrice}
              title="مبلغ پیشنهادی خود را با اعداد انگلیسی وارد کنید"
              pattern="[1-9]+[.]{0,1}[0-9]+"
            />
            <span className="unit" dir="ltr">تومان</span>
            <button className="send-button" type="submit" onClick={this.bidProject}>ارسال</button>
          </div>
        </div>
    }
    return (
      <div>
        <NavBar/>
        <Toplightblueline marginTop="-2%" padding="3.5%" />
        <ToastContainer rtl={true}/>
        <div className="project-info" dir="rtl">
          <div className="row" id="top-info">
            <div className="col-md-12">
              <div className="media">
                <div className="media-right">
                  <img className="media-object" src={this.state.imageURL}  alt="project image" id="projectImage" />
                </div>
                <div className="media-body">
                <h1 className="media-heading" id="priojrct-name"><b>{this.state.title}</b></h1>
                <h4 id="deadline"><span className="flaticon-deadline"></span><b>زمان باقی‌مانده:</b> ۱۷ دقیقه و ۲۵ ثانیه</h4>
                <h4 id="budget"><span className="flaticon-money-bag"></span><b>بودجه: {this.convertToPersianNumber(this.state.budget.toString())} تومان</b></h4>
                {winner}
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
                  onClick="noAction"
                  buttonTitle="امتیاز لازم در این مهارت"
                  class="no-hover-button blue-botton"
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
  id: string;
  title: string;
  budget: number;
  imageURL: string;
  description: string;
  deadline: string;
  skills: Skill[];
  hasBid: boolean;
  isExpired: boolean;
  winner: string;
  price: number;
}

interface Skill{
  name: string;
  point: number;
}

interface props {
  match: any;
}

