import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from './../../services/error-handler-service';
import './../../styles/base.scss';
import './home.scss';

export default class Home extends Component<Props, State> {
  infos: string;
  testAxios = () => {
    var dataInRes:string = '';
    console.log("8");
    // const axios = require('axios');
    const instance = axios.create({
      baseURL: 'http://localhost:8080/ca2_Web_exploded'
    });
  
    instance.get('/users', {
      params: {
        userId: 10
      }
    })
    .then((response : any) => {
      if (response.status !== 200){
         ErrorHandlerService(response);
         console.log('kh');
      }
      console.log(response.data);
      // var dataInRes:string = '';
      // console.log(JSON.parse(response.data));
      var myObj = response.data;
      dataInRes = myObj.firstName + ' ' + myObj.lastName;
      console.log('in first func ' + dataInRes);
      this.setState({ data: this.state.data + dataInRes});
      return dataInRes;
      console.log("18");
    })
    .catch(function (error : any) {
      console.log(error);
      console.log("22");
    })
    .then(function () {
      console.log('in last func ' + dataInRes);
      console.log("25");
    });
    console.log('in main func ' + dataInRes);
    return dataInRes;
  }

  constructor(props: Props) {
    super(props);
    this.infos = 'none';
    this.state = {
      data: ''
    };
  }

  componentDidMount = () => {
    this.testAxios();
  };

  componentWillUnmount = () => {};
  
  render() {
    const { data } = this.state;
    console.log("30");
    return (
      <div>
        <p>{this.infos}</p>
        <p>Hello world!</p>
        <a href="/userProfile"> click me to go to profile!</a>
      </div>
    );
  }
}

interface State {
  data: any;
}

interface Props {}