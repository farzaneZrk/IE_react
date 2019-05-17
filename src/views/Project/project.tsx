import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './project.scss';
import NavBar from '../components/NavBar'
import ProjectTopInfo from './components/ProjectTopInfo'
import BidBox from './components/BidBox'
import DeadlineReachedStatus from './components/DeadlineReachedStatus'
import AlreadyBidStatus from './components/AlreadyBidStatus'
import Toplightblueline from '../components/Toplightblueline';
import SkillCardRow from '../components/SkillCardRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthHelperMethods from "../Authentication/Register/AutherChecker";
import {RouteComponentProps} from "react-router";

const Auth = new AuthHelperMethods();


export default class Project extends Component<props & RouteComponentProps<props>, state> {
  projectId:string;

  notifySuccess = () => toast.success("پیشنهاد شما با مبلغ " + this.state.price + " تومان ثبت شد.")
  notifyError = (msg:string) => { toast.error(msg); } 

  getProjectData = () => {
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    instance.get('/projects?', {
      params: {
        projectId: this.projectId,
        jwt : Auth.getToken()
      }
    })
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      var myObj = response.data;
      this.setState({ title: myObj.title});
      this.setState({ budget: myObj.budget });
      this.setState({ description: myObj.description });
      this.setState({ imageURL: myObj.imageURL });
      this.setState({ deadline: myObj.deadline });
      this.setState({ hasBid: myObj.hasBid });
      this.setState({ isExpired: myObj.isExpired });
      this.setState({id: myObj.id});
      this.setState({winner: myObj.winner})
      let no = 'no one! '
      if(myObj.winner.localeCompare(no) === 0){
        this.setState({winner: 'بدون برنده!'})
      }
      this.parseSkills(myObj.skills);

    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  bidProject = () => {
    if(this.state.price === 0)
      return;
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded/projects/'
    });

    instance.post('bid?bidAmount=' + this.state.price + '&projectId=' + this.state.id + '&userId=1',{}, {
      params: {
        jwt : Auth.getToken()
      }
    })
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
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
    if(price < 1000){
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
    this.setState({skills: sl})

  }

  convertToPersianNumber = (input:any) => {
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
      return input.replace(/\d/g,function(m:any){
          return persianMap[parseInt(m)];
      });
  }
  
  constructor(props: props & RouteComponentProps<props>) {
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
    if (!Auth.loggedIn()) {
      this.props.history.replace("/login");
    }
  };

  render() {
    console.log("salam" + this.state.hasBid)
    var lastPart;
    var winner = "";

    if (this.state.hasBid){
      lastPart = <AlreadyBidStatus/>;
      if(this.state.isExpired){
        winner = this.state.winner;
      }
    }
    else if(this.state.isExpired){
      lastPart = <DeadlineReachedStatus/>;
      winner = this.state.winner;
    }
    else{
      lastPart =
        <BidBox
          onChange={this.checkPrice}
          onBlur={this.setPrice}
          onClick={this.bidProject}
        />
    }
    return (
      <div>
        <NavBar/>
        <Toplightblueline marginTop="-2%" padding="3.5%" />
        <ToastContainer rtl={true}/>
        <div className="project-info" dir="rtl">
          <ProjectTopInfo
            imageURL={this.state.imageURL}
            title={this.state.title}
            deadline={this.state.deadline}
            budget={this.convertToPersianNumber(this.state.budget.toString())}
            description={this.state.description}
            winner={winner}
          />
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

