import React, { Component } from 'react';
import './../../styles/base.scss';
import './login.scss';
import PageHeader from './../components/PageHeader';
import WhiteBodyContent from './../components/WhiteBodyContent';
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

                <WhiteBodyContent>
                    <form action="./home">
                        <FormRow
                            inputId="username" labelText="نام کاربری :" title="حروف,.,-,_"
                            pattern="[A-Za-zپ-ژ-گ-چ-أ-ي]+[A-Z0-9a-z.-_پ-ژ-گ-چ-أ-ي]*[A-Z0-9a-zپ-ژ-گ-چ-أ-ي]+"
                        />
                        <FormRow
                            inputId="password" inputType="password" labelText="گذرواژه :"
                            pattern=".*[0-9]+.*" title="شامل حداقل یک عدد "
                        />
                        <CurveGreenButton text="ورود" styles="" onClick="" />
                        <span dir="rtl"><a href="/register">  / ثبت نام</a></span>
                    </form>
                </WhiteBodyContent>
            </div>
        );
    }
}

