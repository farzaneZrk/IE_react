import React, { Component } from 'react';
import '../../styles/base.scss';
import './register.scss';
import PageHeader from '../components/PageHeader';
import WhiteBodyContent from '../components/WhiteBodyContent';
import FormRow from '../components/FormRow';
import CurveGreenButton from '../components/CurveGreenButton';
import SlideShow from './components/SlideShow';
import Toplightblueline from '../components/Toplightblueline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Register extends Component <props, state>{
  interval:any;
  confirmedPassword: boolean;
  notifyError = (code:number) =>{
    if (code === 1){
      toast.error("دو پسورد وارد شده با یکدیگر تطابق ندارند!");
    }
    else
      toast.error("لطفا هر دو فیلد پسورد را پر کنید!");
  } 
  notifySuccess = () => toast.success("تغیرات با موفقیت اعمال شد.");

  constructor(props: props) {
    super(props)
    this.state = {
      password: '',
      cPassword: '',
      registerStyle: {
        pointerEvents: 'none',
        opacity: '0.75',
      },
    };
    this.confirmedPassword = false;
  }
  componentWillMount() {
    document.title = 'Register';
  }

  checkPassword = () => {
    if (this.state.cPassword === '' || this.state.cPassword === ''){
      return
    }
    else if (this.state.cPassword !== '' && this.state.cPassword !== this.state.password){
      this.notifyError(1)
    }
    else if (this.state.cPassword === this.state.password){
      this.confirmedPassword = true;
      this.setState({registerStyle: {
        pointerEvents: 'visible',
        opacity: '1',
      }
    });
    }
  }

  checkPassword2 = () => {
    if (this.state.cPassword === '' || this.state.cPassword === ''){}
    else if(this.state.cPassword === this.state.password && this.confirmedPassword === false){
      this.confirmedPassword = true;
      this.setState({registerStyle: {
        pointerEvents: 'visible',
        opacity: '1',
      }
    });
    }
  }

  noAction(){}

  componentDidMount() {
    this.interval = setInterval(() => this.checkPassword2(), 1000);
  }
  

  handleConfirmPassword = (event: any) => {
    this.setState({cPassword : event.target.value})
  }

  handlePassword = (event: any) => {
    this.setState({password : event.target.value})
  }
    
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
            <form action="/home">
              <FormRow 
                inputId="firstName" labelText="نام  :" title="تنها حروف مجازند"
                pattern={"[A-Za-z].{3,}" || "[پ-ژ-گ-چ-أ-ي].{3,}"}
              />
              <FormRow 
                inputId="lastName" labelText="نام خانوادگی :" title="تنها حروف مجازند"
                pattern={"[A-Za-z].{3,}" || "[پ-ژ-گ-چ-أ-ي].{3,}"}
              />
              <FormRow 
                inputId="username" labelText="نام کاربری :" title="حروف,.,-,_"
                pattern="[A-Za-zپ-ژ-گ-چ-أ-ي]+[A-Z0-9a-z.-_پ-ژ-گ-چ-أ-ي]*[A-Z0-9a-zپ-ژ-گ-چ-أ-ي]+"
              />
              <FormRow 
                inputId="password" inputType="password" labelText="گذرواژه :"
                pattern=".*[0-9]+.*" title="شامل حداقل یک عدد "
                onChange={this.handlePassword}
              />
              <FormRow 
                inputId="password2" inputType="password" labelText="تکرار گذرواژه :"
                pattern=".*[0-9]+.*" title="شامل حداقل یک عدد " onBlur={this.checkPassword}
                onChange={this.handleConfirmPassword}
              />
              <FormRow 
                inputId="imageURL" inputType="url" labelText="عکس پروفایل :" 
                placeHolder="https://example.com" pattern={"https://.*" || "http://.*"}
              />            
              <FormRow 
                inputId="jobTitle" labelText="عنوان شغل  :" title="حروف,()"
                pattern="[A-Zپ-ژ-گ-چ-أ-يa-z-(-)].{3,}"
              />
              <FormRow inputId="id" labelText="شرح حال  :" onBlur={this.noAction} />
              <CurveGreenButton text="ثبت نام" styles={this.state.registerStyle}  onClick="" /><span dir="rtl"><a href="/">  / ورود</a></span>
            </form>
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
}

interface props {}
