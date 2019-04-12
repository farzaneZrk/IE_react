import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './userProfile.scss';
import NavBar from '../components/NavBar'
import Toplightblueline from '../components/Toplightblueline';
import ShortLine from '../components/ShortLine';
import UserInfo from '../components/UserInfo';
import SkillCardRow from '../components/SkillCardRow';

export default class UserProfile extends Component<props, state> {
  getUserData = () => {
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    instance.get('/users?', {
      params: {
        userId: 1
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
      this.initializeSkills(myObj.skills)
      // this.setState({skills: myObj.skills})
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  initializeSkills = (skillsJson:any[]) =>{
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

  getSkillNames = () => {    
    let instance = axios.create()

    instance.get("http://142.93.134.194:8000/joboonja/skill/")
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      var arr: string[];
      arr = [];
      let i;
      for (i in response.data) {
        arr.push(response.data[i].name)
      }
      this.setState({skillNames: arr})
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  addSkill = (event: any) => {
    console.log(this.state.skills)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });
    console.log("id=1&skillName=" + this.state.newSkill)
    instance.put("/users?id=1&skillName=" + this.state.newSkill)
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      console.log(response.data);
    })
    .catch(function (error : any) {
      console.log(error);
    })
  }

  setNewSkill = (event: any) => {
    this.setState({newSkill : event.target.value})
  }

  constructor(props: props) {
    super(props);
    this.state = {
      name: '',
      jobTitle: '',
      imageURL: '',
      bio: '',
      skills: [],
      skillNames: [],
      newSkill: '',
    };
  }

  componentWillMount() {
    document.title = 'My Account';
  }

  componentDidMount = () => {
    this.getUserData();
    this.getSkillNames();
  };

  render() {
    const { skillNames } = this.state;
    var skillOptions:any[] = [];
    skillNames.forEach(element => {
      skillOptions.push(<option value={element}>{element}</option>);
    });

    return (
      <div>

        <NavBar/>

        <Toplightblueline marginTop="4.5%" padding="5%">
          <ShortLine />
          <ShortLine width="24%" left="43%" />
        </Toplightblueline>

        <UserInfo
          name={this.state.name}
          jobTitle={this.state.jobTitle}
          imageURL={this.state.imageURL}
          bio={this.state.bio}
        />

        <div className="add-skill-box" dir="rtl">
          <label dir="rtl">مهارت‌ها: </label>
          <div className="selector-button">
            <select id="selcolor" onChange={this.setNewSkill}>
              <option id="default-option">--  انتخاب مهارت  -- </option>
              {skillOptions}
            </select>
            <button className="add-skill-button" onClick={this.addSkill}>افزودن مهارت</button>
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
        {/* <p>{this.state.skills[0].name || ''}<button className="endorse-button blue-botton">{this.state.skills[0].name || ''}</button></p> */}
        <SkillCardRow skills={this.state.skills}/>
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
  skillNames: string[];
  newSkill: string;
}

interface Skill {
  name: string;
  point: number;
  hasEndorsed: boolean;
}

interface props {}