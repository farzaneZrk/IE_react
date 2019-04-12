import React, { Component } from 'react';
import ProjectComponent from "./ProjectComponent";
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import UserComponent from './UserComponent'

class UserList extends Component <props, State>{
    private static usersData = [];
    constructor(props: props) {
        super(props);
        UserList.usersData = props.users;
        this.state = {
        };
    }

    render() {
        var renderedOutput = UserList.usersData.map(item => <UserComponent user={item} key={item['id']}/>);
        var userSearch = {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '100%',
            border: '5px solid white',
            borderRadius: '4px',
            background: 'whitesmoke',
            padding: '10px 10px 10px 20px',
            marginBottom: '3%',
        };

        var userColumn = {
            marginTop: '-50px',
        };

        return(
            <div className="col-sm-3" style={userColumn}>
                <input dir="rtl" value="" placeholder="جستجو نام کاربر" style={userSearch}/>
                {renderedOutput}
            </div>
        )
    }
}

interface State {
}

interface props {
    users : []
}

export default UserList;
