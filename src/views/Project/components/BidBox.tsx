import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import './Navbar.scss'

class BidBox extends Component <props, State>{

  constructor(props: props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  toggleHover = () =>{
    this.setState({hover: !this.state.hover})
  };

render() {
  return (
      <div className="bidbox">
        {/* <a href="/home" title="خانه">
          <img
            src={require('./images/logo/logo v1.png')}
            className="logoimg"
          />
        </a>
        <a 
           onMouseEnter={this.toggleHoverExit}
           onMouseLeave={this.toggleHoverExit}
           className="navbar-link"
           href="/">
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
        </a> */}
      </div>
  );
}
}

export default BidBox;

interface State {
  hover: boolean,
}

interface props{
}
