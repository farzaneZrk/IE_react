import React, { Component } from 'react';

class UserComponent extends Component <props, State>{
    constructor(props: props) {
        super(props);
        this.state = {
            userBlockHover: false,
        };
    }

    toggleUserBlock = () =>{
        this.setState({userBlockHover: !this.state.userBlockHover})
    };


    render() {
        let  userBlock;
        if(!this.state.userBlockHover){
            userBlock = {
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
                marginBottom: '3%',
                marginLeft: '-6%',
                width: '112%',
                borderRadius: '4px',
                background: 'white',
                padding: '10px 10px 10px 20px',
            };
        }
        else{
            userBlock = {
                marginBottom: '3%',
                marginLeft: '-6%',
                width: '112%',
                background: 'white',
                padding: '10px 10px 10px 20px',
                boxShadow: "0 12px 14px 0 rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
            };
        }


        let userImage = {
            borderRadius: '4px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '4em',
            height: '4em',
        };

        let userInfo = {
            paddingTop: '5%',
        };

        let userName = {
            color: 'black',

        };

        let userJobTitle = {
            color: 'rgb(145, 143, 143)',
        };

        let userLink = {
            textDecoration : "none",
        };

        // console.log(this.props.user["jobTitle"]);
        return(
            <div className="col-md-12">
                <a href={"/users/" + this.props.user["id"]} style={userLink}>
                    <div style={userBlock}
                         className="media"
                         onMouseEnter={this.toggleUserBlock}
                         onMouseLeave={this.toggleUserBlock}
                         dir="rtl"
                    >
                        <div className="media-right">
                            <img style={userImage} className="media-object" src={require('./images/b.png')} alt="user image"/>
                        </div>
                        <div style={userInfo} className="media-body">
                            <h5 style={userName} className="media-heading">{this.props.user["name"]}</h5>
                            <p dir="rtl" style={userJobTitle}>{this.props.user["job_title"]}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

interface State {
    userBlockHover: boolean,
}

interface props {
    user : any,
}

export default UserComponent;
