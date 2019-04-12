import React, { Component } from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import ProjectComponent from "src/views/Home/ProjectComponent";

class UserComponent extends Component <props, State>{
    private static userData : any;
    constructor(props: props) {
        super(props);
        UserComponent.userData= props.user;
        this.state = {
        };
    }

    render() {
        var userBlock = {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            marginBottom: '3%',
            marginLeft: '-6%',
            width: '112%',
            borderRadius: '4px',
            background: 'white',
            padding: '10px 10px 10px 20px',
        };

        var userImage = {
            borderRadius: '4px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '4em',
            height: '4em',
        };

        var userInfo = {
            paddingTop: '5%',
        };

        var userName = {
            color: 'black',
        };

        var userUserName = {
            color: 'rgb(145, 143, 143)',
        };

        // console.log(UserComponent.userData["jobTitle"]);
        return(
            <div className="col-md-12">
                <a>
                    <div style={userBlock} className="media" dir="rtl">
                        <div className="media-right">
                            <img style={userImage} className="media-object" src={UserComponent.userData["imageURL"]} alt="user image"/>
                        </div>
                        <div style={userInfo} className="media-body">
                            <h5 style={userName} className="media-heading">{UserComponent.userData["name"]}</h5>
                            <p dir="rtl" style={userUserName}>{UserComponent.userData["job_title"]}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

interface State {
}

interface props {
    user : any,
}

export default UserComponent;
