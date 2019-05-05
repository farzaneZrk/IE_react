import React, { Component } from 'react';
import UserComponent from './UserComponent'

class UserList extends Component <props, {}>{
    constructor(props: props) {
        super(props);
    }

    render() {
        var renderedOutput = this.props.users.map(item => <UserComponent user={item} key={item['id']}/>);
        var userSearch = {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '75%',
            border: '5px solid white',
            borderRadius: '4px',
            background: 'whitesmoke',
            padding: '10px 10px 10px 20px',
            marginBottom: '3%',
            marginLeft: '6px',
        };

        var userColumn = {
            marginTop: '-60px',
        };

        return(
            <div className="col-sm-3" style={userColumn}>
                <input dir="rtl" placeholder="جستجو نام کاربر"
                       style={userSearch}
                       onChange={e => this.props.onSearchChange(e.target.value)}/>

                {renderedOutput}
            </div>
        )
    }
}

interface props {
    users : [];
    onSearchChange: any;
}

export default UserList;
