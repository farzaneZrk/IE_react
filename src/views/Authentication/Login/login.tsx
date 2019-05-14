import React, { Component } from 'react';
import '../../../styles/base.scss';
import './login.scss';
import PageHeader from '../components/PageHeader';
import WhiteBodyContent from '../components/WhiteBodyContent';
import FormRow from '../components/FormRow';
import CurveGreenButton from '../components/CurveGreenButton';
import { RouteComponentProps } from "react-router-dom";
import axios from 'axios';
import { ErrorHandlerService } from '../../../services/error-handler-service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class UserProfile extends Component<RouteComponentProps<{}>, state> {
    notifyError = (msg:string) => { toast.error(msg); } 
    
    componentWillMount() {
        document.title = 'Login';
    }

    constructor(props: RouteComponentProps<{}>) {
        super(props)
        this.state = {
          password: '',
          username: ''
        }
    }

    handlechange = (event: any) => {
        let key: string;
        let value: string;
        key = event.target.id;
        value = event.target.value;
        switch(key) {
          case "username":
            this.setState({username: value});
            break;
          case "password":
            this.setState({password: value});
            break;
        }
    }

    sendLoginReq = () => {
        let instance = axios.create({
          baseURL: 'http://localhost:8080/ca2_Web_exploded'
        });
    
        var data = {
          username: this.state.username,
          password: this.state.password
        }
        console.log(data);
        const qs = require('qs')
    
        instance.post('/login', qs.stringify(data))
        .then((response : any) => {
            if (response.status !== 200){
                ErrorHandlerService(response);
            }
            console.log(response.data.msg)
            if(response.data.msg === 'ok'){
              let path = '/home';
              this.props.history.push(path);
              console.log("res was ok");
            }
            else if(response.data.msg === 'this username does not exist'){
              this.notifyError("کاربر با این نام کاربری وجود ندارد")
            }
            else if(response.data.msg === 'username or password is not correct'){
                this.notifyError("نام کاربری یا رمز عبور نادرست است")
            }
        });
    };

    render() {
        return (
            <div>
                <PageHeader backgroundColor="lightblue" >
                    <img src={require('./../images/logo/logo v1.png')} alt="logo"/>
                </PageHeader>
                <ToastContainer rtl={true}/>
                <WhiteBodyContent>
                    {/* <form action="./home"> */}
                        <FormRow
                            inputId="username" labelText="نام کاربری :" title="حروف,.,-,_"
                            pattern={"[_.آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]*"} onChange={this.handlechange}
                        />
                        <FormRow
                            inputId="password" inputType="password" labelText="گذرواژه :"
                            pattern=".*[0-9]+.*" title="شامل حداقل یک عدد " onChange={this.handlechange}
                        />
                        <CurveGreenButton text="ورود" styles="" onClick={this.sendLoginReq} />
                        <span dir="rtl"><a href="/register">  / ثبت نام</a></span>
                    {/* </form> */}
                </WhiteBodyContent>
            </div>
        );
    }
}

interface state{
    username: string;
    password: string;
}