import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './otherUserProfile.scss';
import NavBar from '../components/NavBar'
import Toplightblueline from '../components/Toplightblueline';
import ShortLine from '../components/ShortLine';
import UserInfo from '../components/UserInfo';
import SkillCardRow from '../components/SkillCardRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class OtherUserProfile extends Component<props, state> {
  userId:String;
  getUserData = () => {
    console.log(this.userId)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    instance.get('/users?', {
      params: {
        userId: this.userId
      }
    })
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      var myObj = response.data;
      this.setState({ name: myObj.firstName + ' ' + myObj.lastName });
      this.setState({ jobTitle: myObj.jobTitle });
      this.setState({ bio: myObj.bio });
      this.setState({ imageURL: myObj.imageUrl });
      console.log(myObj.skills)
      this.parseSkills(myObj.skills)
      // this.setState({skills: myObj.skills})
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  parseSkills = (skillsJson:any[]) =>{
    let sl: Skill[] = [];
    skillsJson.forEach(element => {
      let endorsers: string[] = element.endorsers;
      sl.push(
        { name: element.name, point: element.point , hasEndorsed: ( endorsers.indexOf("1") > -1 )}
      );
    });
    console.log(sl)
    this.setState({skills: sl})

  }

  endorseSkill = (event: any) => {
    let selectedSkill = event.target.value
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded/users'
    });

    instance.put(
      "/endorse?endorserId=1&endorsedId=" + this.userId + "&skillName=" + selectedSkill
    )
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }

      if (response.data.errorCode === "200"){
        console.log(response.data);
        this.notify(1, selectedSkill);
        return;
      }
      console.log(response.data);
      let s = this.state.skills
      for (let i=s.length-1; i>=0; i--) {
        if(s[i].name === selectedSkill) {
          s[i].point++;
          break;
        }
      }
      this.setState({skills: s})
      this.notify(0, selectedSkill);
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  constructor(props: props) {
    super(props);
    const { userId } = this.props.match.params
    this.userId = userId;
    this.state = {
      name: '',
      jobTitle: '',
      imageURL: '',
      bio: '',
      skills: [],
    };
  }

  componentWillMount() {
    document.title = this.state.name + "profile";
  }

  componentDidMount = () => {
    this.getUserData();
    const { userId } = this.props.match.params
    this.userId = userId;
  };

  notify = (code:number, skillName:string) =>{
    if (code === 1){
      toast.error("شما قبلا مهارت " + skillName + " این کاربر را تایید کرده‌اید");
    }
    else
      toast.success("مهارت " + skillName + " این کاربر تایید شد");
  } 

  render() {
    return (
      <div>

        <NavBar/>

        <Toplightblueline marginTop="-2%" padding="5%">
          <ShortLine />
          <ShortLine width="24%" left="40%" />
        </Toplightblueline>
        <ToastContainer rtl={true}/>
        <UserInfo
          name={this.state.name}
          jobTitle={this.state.jobTitle}
          imageURL={this.state.imageURL}
          bio={this.state.bio}
        />

        { this.state.skills.length !== 0 && 
          <SkillCardRow
            skills={this.state.skills}
            onClick={this.endorseSkill}
            buttonTitle="تایید مهارت"
            class="endorse-button blue-botton"
            style={{marginLeft: '15%'}}
          />
        }
      </div>
    );
  }
}

interface state {
  name: string;
  jobTitle: string;
  imageURL: string;
  bio: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  point: number;
  hasEndorsed: boolean;
}

interface props {
  match: any;
}
