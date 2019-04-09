import React, { Component } from 'react';
import './../../styles/base.scss';
import './register.scss';
import PageHeader from './../components/PageHeader';
import BodyContent from './../components/BodyContent';
import FormRow from './../components/FormRow';
import CurveGreenButton from './../components/CurveGreenButton';
import SlideShow from './components/SlideShow';

export default class UserProfile extends Component {
  componentWillMount() {
    document.title = 'Register';
  }
    
  render() {    
    return (
      <div>
        <PageHeader>
          <SlideShow />
        </PageHeader>

        <div className="toplightblueline" />
        <div style={{ position: 'relative', zIndex: 100 }}>
          <BodyContent>
            <form action="./home-page.html">
              <FormRow inputId="firstName" labelText="نام  :" />
              <FormRow inputId="lastName" labelText="نام خانوادگی :" />
              <FormRow inputId="password" inputType="password" labelText="گذرواژه :" />
              <FormRow inputId="password2" inputType="password" labelText="تکرار گذرواژه :" />            
              {/* <div className="form-group">
                <label>عکس پروفایل:</label>
                <input type="url" id="imageURL" class="form-control input-box" placeholder="https://example.com" pattern="https://.*" size='30' required />
              </div> */}
              <FormRow inputId="jobTitle" labelText="عنوان شغل  :" />
              <FormRow inputId="id" labelText="شرح حال  :" />
              <CurveGreenButton text="ثبت نام" styles="" /><span dir="rtl"><a href="/">  / ورود</a></span>
            </form>
          </BodyContent>
        </div>
      </div>
    );
  }
}
