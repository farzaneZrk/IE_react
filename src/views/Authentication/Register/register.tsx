import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../../services/error-handler-service';
import '../../../styles/base.scss';
import './register.scss';
import PageHeader from '../components/PageHeader';
import WhiteBodyContent from '../components/WhiteBodyContent';
import FormRow from '../components/FormRow';
import CurveGreenButton from '../components/CurveGreenButton';
import SlideShow from './components/SlideShow';
import Toplightblueline from '../../components/Toplightblueline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Url } from 'url';
import { runInThisContext } from 'vm';
import { RouteComponentProps } from "react-router-dom";
import decode from "jwt-decode";
import AuthHelperMethods from "../Register/AutherChecker";

const Auth = new AuthHelperMethods();


export default class Register extends Component <props & RouteComponentProps<props>, state>{
  interval:any;
  confirmedPassword: boolean;
  confirmedUsername: boolean;
  confirmFirstname: boolean;
  confirmLastname: boolean;
  confirmImageUrl: boolean;
  confirmJobTitle: boolean;

  notifyError = (msg:string) => { toast.error(msg); }
  notifySuccess = () => toast.success("تغیرات با موفقیت اعمال شد.");

  constructor(props: props & RouteComponentProps<props>) {
    super(props)
    this.state = {
      password: '',
      cPassword: '',
      firstname: '',
      lastname:  '',
      username:  '',
      imageURL: '',
      jobTitle: '',
      bio: '',
      usernameBorder: 'rgba(4, 179, 179, 0.509)',
      passwordBorder: 'rgba(4, 179, 179, 0.509)',
      cpasswordBorder: 'rgba(4, 179, 179, 0.509)',
      registerStyle: {
        pointerEvents: 'none',
        opacity: '0.75',
      },
    };
    this.confirmedPassword = false;
    this.confirmedUsername = false;
    this.confirmFirstname = false;
    this.confirmLastname = false;
    this.confirmImageUrl = false;
    this.confirmJobTitle = false;
  }
  componentWillMount() {
    document.title = 'Register';
  }

  checkPassword = () => {
    if (this.state.cPassword === '' || this.state.cPassword === ''){
      return
    }
    else if (this.state.cPassword !== '' && this.state.cPassword !== this.state.password){
      this.notifyError("دو پسورد وارد شده با یکدیگر تطابق ندارند!");
      this.setState({cpasswordBorder: 'red'})
    }
    else if (this.state.cPassword === this.state.password){
      this.confirmedPassword = true;
      this.setState({cpasswordBorder: 'rgba(4, 179, 179, 0.509)'})
      this.setSubmitButtonClickable();
    }
  }

  setSubmitButtonClickable = () => {
    if(this.confirmedUsername && this.confirmedPassword && (this.state.passwordBorder !== 'red' &&
        this.confirmFirstname && this.confirmLastname && this.confirmJobTitle && this.confirmImageUrl )){
      this.setState({
        registerStyle: {
          pointerEvents: 'visible',
          opacity: '1',
        }
      });
    }
    else{
      this.setState({
        registerStyle: {
          // pointerEvents: 'none',
          opacity: '0.75',
        }
      });
    }
  }

  checkPassword2 = () => {
    if (this.state.cPassword === '' || this.state.cPassword === ''){}
    else if(this.state.cPassword !== this.state.password){
      this.setState({cpasswordBorder: 'red'})
    }
    else if(this.state.cPassword === this.state.password){
      this.setState({cpasswordBorder: 'rgba(4, 179, 179, 0.509)'})
      if(this.confirmedPassword === false){
        this.confirmedPassword = true;
      }
      this.setSubmitButtonClickable();
    }
  }

  noAction(){}

  componentDidMount() {
    this.interval = setInterval(() => this.checkPassword2(), 1000);
    if (Auth.loggedIn()) {
      this.props.history.replace("/home");
    }
  }


  handleConfirmPassword = (event: any) => {
    this.setState({cPassword : event.target.value});
  }

  handlePassword = (event: any) => {
    this.setState({password : event.target.value});
  }

  hasNumber = (event: any) => {
    let pw:string = event.target.value;
    console.log(event.target.value)
    console.log(event.target.value.length)

    if (!/\d/.test(pw)){
      this.setState({passwordBorder: 'red'})
      this.notifyError("پسورد باید شامل حداقل یک عدد باشد!")
    }
    else if(event.target.value.length < 8){
      this.setState({passwordBorder: 'red'})
      this.notifyError("گذرواژه باید حداقل ۸ کاراکتر (شامل عدد) باشد.")
    }
    else
      this.setState({passwordBorder: 'rgba(4, 179, 179, 0.509)'})
  }

  checkUsername = (username:string) => {
    if(username.length < 2){
      this.notifyError("نام کاربری باید حداقل ۳ کاراکتر باشد");
      return;
    }
    console.log(username)
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    instance.get('/checkUsername', {
      params: {
        username: username
      }
    })
        .then((response : any) => {
          if (response.status !== 200){
            ErrorHandlerService(response);
          }
          console.log("hello" + response.data.isValid)
          if(!response.data.isValid){
            this.confirmedUsername = false;
            this.setState({usernameBorder: 'red'});
            this.notifyError("نام کاربری انتخاب شده تکراری است")
          }
          else{
            this.confirmedUsername = true;
            this.setState({usernameBorder: 'rgba(4, 179, 179, 0.509)'});
            this.setSubmitButtonClickable();
          }
        })
        .catch(function (error : any) {
          console.log(error);
        })
  }

  checkFirstname = (firstname: string) => {
    var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
    if (!PersianOrASCII.test(firstname)){
      this.confirmFirstname = false;
      return this.notifyError("لطفا فقط از حروف استفاده کنید.");
    }
    if(firstname.length < 3){
      this.confirmFirstname = false;
      return this.notifyError("نام باید حداقل ۳ کاراکتر باشد.")
    }
    this.confirmFirstname = true;
  }

  checkLastname = (lastname: string) => {
    var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
    if (!PersianOrASCII.test(lastname)){
      this.confirmLastname = false;
      return this.notifyError("لطفا فقط از حروف استفاده کنید.");
    }
    if(lastname.length < 3){
      console.log("i get it")
      this.confirmLastname = false;
      return this.notifyError("نام خانوادگی باید حداقل ۳ کاراکتر باشد.")
    }
    this.confirmLastname = true;
  }

  checkImageURL = (imageURL: string) => {
    var PersianOrASCII = /(https:[//]|http:[//])(.+)/ ; //complete it
    if (!PersianOrASCII.test(imageURL)){
      this.confirmImageUrl = false;
      return this.notifyError("لطفا لینک عکس خود را وارد کنید.");
    }
    if(imageURL.length < 12){
      this.confirmImageUrl = false;
      return this.notifyError("لینک وارد شده نامعتبر است")
    }
    this.confirmImageUrl = true;
  }

  checkJobTitle = (jobTitle: string) => {
    var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
    if (!PersianOrASCII.test(jobTitle)){
      this.confirmJobTitle = false;
      return this.notifyError("لطفا فقط از حروف استفاده کنید.");
    }
    if(jobTitle.length < 3){
      this.confirmJobTitle = false;
      return this.notifyError("عنوان شغلی باید حداقل ۲ کارکتر باشد.")
    }
    this.confirmJobTitle = true;
  }

  handleBlur = (event: any) => {
    let key: string;
    key = event.target.id
    switch(key) {
      case "firstname":
        this.setState({firstname: event.target.value})
        this.checkFirstname(event.target.value)
        break;
      case "lastname":
        this.setState({lastname: event.target.value})
        this.checkLastname(event.target.value)
        break;
      case "username":
        this.setState({username: event.target.value})
        this.checkUsername(event.target.value)
        break;
      case "jobTitle":
        this.setState({jobTitle: event.target.value})
        this.checkJobTitle(event.target.value)
        break;
      case "imageURL":
        this.setState({imageURL: event.target.value})
        this.checkImageURL(event.target.value)
        break;
      case "bio":
        this.setState({bio: event.target.value})
        break;
      default:
        break;
    }
  }

  handlechange = (event: any) => {
    let key: string;
    let value: string;
    key = event.target.id;
    value = event.target.value;
    switch(key) {
      case "firstname":
        var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
        if (!PersianOrASCII.test(value) || value.length<3){
          this.confirmFirstname = false;
          break;
        }
        this.confirmFirstname = true;
        // this.setSubmitButtonClickable
        break;
      case "lastname":
        var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
        if (!PersianOrASCII.test(value) || value.length<3){
          this.confirmLastname = false;
          break;
        }
        this.confirmLastname = true;
        this.setSubmitButtonClickable
        break;
      case "jobTitle":
        var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-z]+$/ ;
        if (!PersianOrASCII.test(value) || value.length < 3){
          this.confirmJobTitle = false;
          break;
        }
        this.confirmJobTitle = true;
        this.setSubmitButtonClickable
        break;
      case "imageURL":
        var PersianOrASCII = /(https:[//]|http:[//])(.+)/ ; //complete it
        if (!PersianOrASCII.test(value) || value.length<12){
          this.confirmImageUrl = false;
          break;
        }
        this.confirmImageUrl = true;
        this.setSubmitButtonClickable
        break;
      case "bio":
        this.setState({bio: event.target.value})
        break;
      default:
        break;
    }
  };



  sendRegisterReq = () => {

    console.log("LOGLOG")
    let instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });

    var data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      imageURL: this.state.imageURL,
      jobTitle: this.state.jobTitle,
      bio: this.state.bio
    }
    const qs = require('qs')
    // var self = this;

    instance.post('/registerUser', qs.stringify(data))
        .then((response : any) => {
          if (response.status !== 200){
            ErrorHandlerService(response);
          }
          console.log(response.data.msg);
          if(response.data.msg === 'ok'){
            // window.open("/home");
            let path = '/home';
            this.setToken(response.data.jwt); // Setting the token in localStorage
            // return Promise.resolve(res);



            this.props.history.push(path);
            console.log("res was ok");
          }
          else{
            this.notifyError("لطفا با نام کاربری دیگری تلاش کنید.")
          }
        });
  };

  // loggedIn = () => {
  //   const token = this.getToken(); // Getting token from localstorage
  //   return !!token && !this.isTokenExpired(token); // handwaiving here
  // };
  //
  setToken = (idToken:any) => {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  };
  //
  // getToken = () => {
  //   // Retrieves the user token from localStorage
  //   return localStorage.getItem("id_token" )  || '{}';
  // };
  //
  // isTokenExpired = (token:any) => {
  //   try {
  //       const decoded = decode(token);
  //     // @ts-ignore
  //     return decoded.exp < Date.now().valueOf() / 1000;
  //   } catch (err) {
  //     console.log("expired check failed! Line 42: AuthService.js");
  //     return false;
  //   }
  // };
  //
  // getConfirm = () => {
  //   let answer = decode(this.getToken());
  //   return answer;
  // };
  //
  // fetch = (url:any, options:any) => {
  //   // performs api calls sending the required authentication headers
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Authorization" : ""
  //   };
  //   // Setting Authorization header
  //   // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  //   if (this.loggedIn()) {
  //     headers["Authorization"] = "Bearer " + this.getToken();
  //   }
  //
  //   return fetch(url, {
  //     headers,
  //     ...options
  //   })
  //       .then(this._checkStatus)
  //       .then(response => response.json());
  // };
  //
  // _checkStatus = (response:any) => {
  //   // raises an error in case response status is not a success
  //   if (response.status >= 200 && response.status < 300) {
  //     // Success status lies between 200 to 300
  //     return response;
  //   } else {
  //     var error = new Error(response.statusText);
  //     error.message = response;
  //     throw error;
  //   }
  // };


  render() {
    return (
        <div>
          <PageHeader>
            <SlideShow />
          </PageHeader>
          <ToastContainer rtl={true}/>
          <Toplightblueline marginTop="-5%" padding="6%" />
          <div style={{ position: 'relative', zIndex: 100 }}>
            <WhiteBodyContent>
              <FormRow
                  inputId="firstname" labelText="*نام  :" title="تنها حروف مجازند"
                  pattern={"[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]*"}
                  onBlur={this.handleBlur} onChange={this.handlechange}
              />
              <FormRow
                  inputId="lastname" labelText="*نام خانوادگی :" title="تنها حروف مجازند"
                  pattern={"[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]*"}
                  onBlur={this.handleBlur} onChange={this.handlechange}
              />
              <FormRow
                  inputId="username" labelText="*نام کاربری :" title="حروف,.,_"
                  pattern={"[_.آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]*"}
                  onBlur={this.handleBlur} inputStyle={{borderColor:  this.state.usernameBorder}}
              />
              <FormRow
                  inputId="password" inputType="password" labelText="*گذرواژه :"
                  pattern=".*[0-9]+.*" title="شامل حداقل یک عدد " onBlur={this.hasNumber}
                  onChange={this.handlePassword} inputStyle={{borderColor:  this.state.passwordBorder}}
              />
              <FormRow
                  inputId="password2" inputType="password" labelText="*تکرار گذرواژه :"
                  pattern=".*[0-9]+.*" title="شامل حداقل یک عدد " onBlur={this.checkPassword}
                  onChange={this.handleConfirmPassword} inputStyle={{borderColor:  this.state.cpasswordBorder}}
              />
              <FormRow
                  inputId="imageURL" inputType="url" labelText="*عکس پروفایل :"
                  placeHolder="https://example.com" pattern={"https://.*" || "http://.*"}
                  onBlur={this.handleBlur} onChange={this.handlechange}
              />
              <FormRow
                  inputId="jobTitle" labelText="*عنوان شغل  :" title="حروف,()" onChange={this.handlechange}
                  pattern="[A-Zپ-ژ-گ-چ-أ-يa-z-(-)].{3,}" onBlur={this.handleBlur}
              />
              <FormRow inputId="bio" labelText="شرح حال  :" onBlur={this.handleBlur} />
              <CurveGreenButton text="ثبت نام" styles={this.state.registerStyle}  onClick={this.sendRegisterReq} /><span dir="rtl"><a href="/login">  / ورود</a></span>
              <p>لطفا همه‌ی بخش‌های * دار را پر کنید.</p>
            </WhiteBodyContent>
          </div>
        </div>
    );
  }
}


interface state {
  password: string;
  cPassword: string;
  registerStyle: any;
  firstname: string;
  lastname: string;
  username: string;
  imageURL: string;
  jobTitle: string;
  usernameBorder: string;
  passwordBorder: string;
  cpasswordBorder: string;
  bio: string;
}

interface props {}
