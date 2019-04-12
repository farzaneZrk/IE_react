import React, {Component} from 'react';
import navBarImage from './images/logo/logo v1.png';
import {CSSProperties} from "@material-ui/core/styles/withStyles";

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

render() {
  const navBar:CSSProperties = {
    width: '100%',
    backgroundColor: 'white',
    overflow: 'auto',
    position: 'fixed',
    top: '0%',
    zIndex: 5,
  };
  // const navBarLink:CSSProperties = {
  //   float: 'left',
  //   // padding: '12px',
  //   color: 'black',
  //   textDecoration: 'none',
  //   padding: '1% 2%',
  //   fontSize: '17px',
  // };
  //
  // const firstLink:CSSProperties = {
  //   float: 'left',
  //   // padding: '12px',
  //   color: 'black',
  //   textDecoration: 'none',
  //   padding: '1% 2%',
  //   fontSize: '17px',
  //   marginLeft: '10%',
  // };

  var exitLinkStyle:CSSProperties;
    if (this.state.exitHover) {
      exitLinkStyle = {
        float: 'left',
        // padding: '12px',
        padding: '1% 2%',
        background: 'rgba(167, 3, 3, 0.89)',
        color: 'white',
        fontSize: '17px',
        textDecoration: 'none',
        marginLeft: '10%',
      }
    } else {
      exitLinkStyle = {
        float: 'left',
        // padding: '12px',
        color: 'black',
        textDecoration: 'none',
        padding: '1% 2%',
        fontSize: '17px',
        marginLeft: '10%',
      }
    }

    var accountLinkStyle:CSSProperties;
    if (this.state.accountHover) {
      accountLinkStyle = {
        float: 'left',
        // padding: '12px',
        background: 'rgba(167, 3, 3, 0.89)',
        color: 'white',
        fontSize: '17px',
        textDecoration: 'none',
        padding: '1% 2%',
      }
    } else {
      accountLinkStyle = {
        float: 'left',
        // padding: '12px',
        color: 'black',
        textDecoration: 'none',
        padding: '1% 2%',
        fontSize: '17px',
      }
    }

  return (
      <div
          style={navBar}
      >
        <img src={navBarImage} alt="logo" className="logoimg"/>
        <a style={exitLinkStyle}
           onMouseEnter={this.toggleHoverExit}
           onMouseLeave={this.toggleHoverExit}
           href="#exit">
          <i className="fa fa-fw fa-user"/>
          خروج
        </a>
        <a href="/profile"
           style={accountLinkStyle}
           onMouseEnter={this.toggleHoverAccount}
           onMouseLeave={this.toggleHoverAccount}
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
// import React, { Component } from 'react';
//
// class Navbar2 extends Component <props, State>{
//   constructor(props: props) {
//     super(props);
//     this.state = {
//       exitHover: false,
//       accountHover: false,
//     };
//   }
//
//   toggleHoverExit = () =>{
//     this.setState({exitHover: !this.state.exitHover})
//   }
//
//   toggleHoverAccount = () =>{
//     this.setState({accountHover: !this.state.accountHover})
//   }
//
//   render() {
//     var exitLinkStyle;
//     if (this.state.exitHover) {
//       exitLinkStyle = {
//         float: 'left',
//         // padding: '12px',
//         padding: '1% 2%',
//         background: 'rgba(167, 3, 3, 0.89)',
//         color: 'white',
//         fontSize: '17px',
//         textDecoration: 'none',
//         marginLeft: '10%',
//         ...this.props.styles,
//       }
//     } else {
//       exitLinkStyle = {
//         float: 'left',
//         // padding: '12px',
//         color: 'black',
//         textDecoration: 'none',
//         padding: '1% 2%',
//         fontSize: '17px',
//         marginLeft: '10%',
//         ...this.props.styles,
//       }
//     }
//
//     var accountLinkStyle;
//     if (this.state.accountHover) {
//       accountLinkStyle = {
//         float: 'left',
//         // padding: '12px',
//         background: 'rgba(167, 3, 3, 0.89)',
//         color: 'white',
//         fontSize: '17px',
//         textDecoration: 'none',
//         padding: '1% 2%',
//         ...this.props.styles,
//       }
//     } else {
//       accountLinkStyle = {
//         float: 'left',
//         // padding: '12px',
//         color: 'black',
//         textDecoration: 'none',
//         padding: '1% 2%',
//         fontSize: '17px',
//         ...this.props.styles,
//       }
//     }
//
//     return(
//       <div className="fixed-top">
//       <div
//         className="navbar fixed-top"
//         style={{
//           width: '100%',
//           backgroundColor: 'white',
//           overflow: 'auto',
//           // position: 'fixed',
//           top: '0%',
//           zIndex: '5px',
//           ...this.props.styles,
//         }}
//       >
//       <a href="/home">
//         <img
//           src={require('./images/logo/logo v1.png')}
//           className="logoimg"
//           style={{
//             marginRight: '10%',
//             display: 'block',
//             float: 'right',
//             height: '100%',
//             width: '10%',
//             minWidth: '10px',
//           }}
//         />
//       </a>
//       <a
//         href="/"
//         style={exitLinkStyle}
//         onMouseEnter={this.toggleHoverExit}
//         onMouseLeave={this.toggleHoverExit}
//       >
//         <i className="fa fa-fw fa-user"></i>خروج
//       </a>
//       <a
//         href="/profile"
//         style={accountLinkStyle}
//         onMouseEnter={this.toggleHoverAccount}
//         onMouseLeave={this.toggleHoverAccount}
//       >
//         <i className="fa fa-fw fa-user"></i>حساب کاربری
//       </a>
//     </div>
//       </div>
//     )
//   }
// }
//
// interface State {
//   exitHover: boolean,
//   accountHover: boolean,
// }
//
// interface props {
//   styles: any;
// }
//
// export default Navbar2;
