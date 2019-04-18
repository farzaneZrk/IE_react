import React from 'react';
import border from '../images/c.png';
import profile from '../images/b.png';
import './UserInfo.scss';


function UserInfo(Props) {
  return (
    <div>
      <div style={{ marginBottom: '6%' }}>
        <div className="UserInfo">
          <img
            src={border}
            alt="boarder"
            className="imageBorder"
          />
          <div className="UserInfoNameAndPic media" dir="rtl">
            <div className="media-right">
              <img
                className="UserInfoPic media-object"
                id="profileImage"
                src={Props.imageURL || profile}
                alt="user"
              />
            </div>
            <div className="UserInfoNameAndJob media-body">
              <h1 className="media-heading" id="name">
                <b>{Props.name}</b>
              </h1>
              <h4 dir="rtl" id="jobtitle" className="UserInfoJobTitle">
                {Props.jobTitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="UserInfoBio">
        <p dir="rtl" id="bio">{Props.bio}</p>
      </div>
    </div>
  );
}

export default UserInfo;
