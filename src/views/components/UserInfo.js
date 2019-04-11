import React from 'react';
import border from './images/c.png';
import profile from './images/b.png';


function UserInfo(Props) {
  return (
    <div>
      <div style={{ marginBottom: '6%' }}>
        <div
          className="UserInfo"
          style={{
            padding: '5%',
            height: '70%',
            width: '10%',
            marginTop: '-5%',
            marginLeft: '75%',
            position: 'relative',
            textAlign: 'left',
          }}
        >
          <img
            src={border}
            alt="boarder"
            style={{
              borderRadius: '25px',
              top: '-45px',
              right: '0',
              position: 'absolute',
              border: '20px solid white',
              width: '156%',
              height: '164%',
            }}
          />
          <div
            className=" media"
            dir="rtl"
            style={{
              top: '-43px',
              right: '10%',
              position: 'absolute',
              width: '505%',
              height: '153%',
              zIndex: '3',
            }}
          >
            <div className="media-right">
              <img
                className="media-object"
                id="profileImage"
                src={Props.imageURL || profile}
                alt="user"
                style={{
                  borderRadius: '25px',
                  width: '13.5vw',
                  height: '14vw',
                  position: 'relative',
                }}
              />
            </div>
            <div
              className="media-body"
              style={{
                paddingTop: '15%',
                paddingRight: '5%',
                textAlign: 'right',
              }}
            >
              <h1 className="media-heading" id="name">
                <b>{Props.name}</b>
              </h1>
              <h4
                dir="rtl"
                id="jobtitle"
                style={{
                  color: 'rgb(110, 110, 110)',
                  fontWeight: 'bold',
                }}
              >
                {Props.jobTitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className="userBio"
        style={{
          paddingLeft: '15%',
          paddingRight: '15%',
          marginTop: '-1.5%',
          marginBottom: '3vw',
          fontSize: '140%',
          color: 'rgb(85, 83, 83)',
          textAlign: 'justify',
        }}
      >
        <p dir="rtl" id="bio">{Props.bio}</p>
      </div>
    </div>
  );
}

export default UserInfo;
