import React, { Component } from 'react';
import './../../styles/base.scss';
import './login.scss';
import PageHeader from './../components/PageHeader';
import BodyContent from './../components/BodyContent';
import FormRow from './../components/FormRow';
import CurveGreenButton from './../components/CurveGreenButton';

export default class UserProfile extends Component {
    componentWillMount() {
        document.title = 'Login';
    }

    render() {
        return (
            <div>
                <PageHeader backgroundColor="lightblue" >
                    <img src={require('./images/logo/logo v1.png')} alt="logo"/>
                </PageHeader>

                <BodyContent>
                    <form action="./home">
                        <FormRow inputId="username" labelText="نام کاربری :" />
                        <FormRow inputId="password" inputType="password" labelText="گذرواژه :" />
                        <CurveGreenButton text="ورود" styles="" /><span dir="rtl"><a href="/register">  / ثبت نام</a></span>
                    </form>
                </BodyContent>
            </div>
        );
    }
}