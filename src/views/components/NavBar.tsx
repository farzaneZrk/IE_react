import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import './Navbar.scss'

class NavBar extends Component <props, State>{

  constructor(props: props) {
    super(props);
    this.state = {
      exitHover: false,
      accountHover: false,
    };
  }

  toggleHoverExit = () =>{
    this.setState({exitHover: !this.state.exitHover})
  };

  toggleHoverAccount = () =>{
    this.setState({accountHover: !this.state.accountHover})
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  };


    render() {
  return (
      <div className="navbar">
        <a href="/home" title="خانه">
          <img
            src={require('./images/logo/logo v1.png')}
            className="logoimg"
          />
        </a>
        <a 
           onMouseEnter={this.toggleHoverExit}
           onMouseLeave={this.toggleHoverExit}
           onClick={this.logout}
           className="navbar-link"
           href="/login">
          <i className="fa fa-fw fa-user"/>
          خروج
        </a>
        <a href="/profile"
           onMouseEnter={this.toggleHoverAccount}
           onMouseLeave={this.toggleHoverAccount}
           className="navbar-link"
           >
          <i className="fa fa-fw fa-user"/>
          حساب کاربری
        </a>
      </div>
  );
}
}

export default NavBar;

interface State {
  exitHover: boolean,
  accountHover: boolean,
}

interface props{
}
