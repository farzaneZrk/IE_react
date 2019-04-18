import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../../services/error-handler-service';
import './../../../styles/base.scss';
import './userProfile.scss';
import NavBar from '../../components/NavBar'
import Toplightblueline from '../../components/Toplightblueline';
import ShortLine from '../components/ShortLine';
import UserInfo from '../components/UserInfo';
import SkillCardRow from '../../components/SkillCardRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      // console.log(myObj.skills)
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
    if (this.state.newSkill === '' || this.state.newSkill === '--  انتخاب مهارت  --'){
      this.notify(3, '');
      return;
    }
    // console.log(this.state.skills)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });
    // console.log("id=1&skillName=" + this.state.newSkill)
    instance.put("/users?id=1&skillName=" + this.state.newSkill)
    .then((response : any) => {

      if (response.status !== 200){
        ErrorHandlerService(response);

      }
      if (response.data.errorCode === "200"){
        this.notify(2, this.state.newSkill)
        return;
      }
      // console.log(response.data);
      let s = this.state.skills
      s.push({name: this.state.newSkill, point: 0, hasEndorsed: false})
      this.setState({skills: s})
      this.notify(1, this.state.newSkill);
    })
    .catch(function (error : any) {
      console.log(error);
    })
    console.log("sakam")

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
    const { userId } = this.props.match.params
  };

  deleteSkill = (event: any) =>{
    let selectedSkill = event.target.value
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });
    instance.delete("/users?id=1&skillName=" + selectedSkill)
    .then((response : any) => {
      if (response.status !== 200){
        ErrorHandlerService(response);
      }
      // console.log(response.data);
      let s = this.state.skills
      for (let i=s.length-1; i>=0; i--) {
        if(s[i].name === selectedSkill) {
          s.splice(i, 1);
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

  notify = (code:number, skillName:string) =>{
    if (code === 1){
      toast.success(skillName + " به لیست مهارت‌های شما اضافه شد");
    }
    else if (code === 2){
      toast.error(skillName + " در لیست مهارت‌های شما وجود دارد");
    }
    else if (code === 3){
      toast.error("ابتدا یک مهارت را انتخاب کنید");
    }
    else
      toast.success(skillName + " از لیست مهارت‌های شما حذف شد");
  } 

  render() {
    const { skillNames } = this.state;
    var skillOptions:any[] = [];
    skillNames.forEach(element => {
      skillOptions.push(<option value={element}>{element}</option>);
    });

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

        <div className="add-skill-box" dir="rtl">
          <label dir="rtl">مهارت‌ها: </label>
          <div className="selector-button">
            <select id="selcolor" onChange={this.setNewSkill}>
              <option id="default-option">--  انتخاب مهارت  --</option>
              {skillOptions}
            </select>
            <button className="add-skill-button" onClick={this.addSkill}>افزودن مهارت</button>
          </div>
        </div>

        { this.state.skills.length !== 0 && 
          <SkillCardRow
            skills={this.state.skills}
            onClick={this.deleteSkill}
            buttonTitle="!حذف مهارت"
            class="remove-button blue-botton"
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
  skillNames: string[];
  newSkill: string;
}

interface Skill {
  name: string;
  point: number;
  hasEndorsed: boolean;
}

interface props {
  match: any;
}