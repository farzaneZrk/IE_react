import React from 'react';
import navBarImage from './images/logo/logo v1.png';

function NavBar(Props) {
  const navBar = {
    width: '100%',
    backgroundColor: 'white',
    overflow: 'auto',
    position: 'fixed',
    // top: '0%',
    zIndex: '5',
  };
  const navBarLink = {
    float: 'left',
    // padding: '12px',
    color: 'black',
    textDecoration: 'none',
    padding: '1% 2%',
    fontSize: '17px',
  };
  return (
    <div
      style={navBar}
    >
      <img src={} alt="logo" className="logoimg" />
      <a style={} href="#exit">
        <i className="fa fa-fw fa-user" />
خروج
      </a>
      <a style={} href={Props.loginReference}>
        <i className="fa fa-fw fa-user" />
حساب کاربری
      </a>
    </div>
  );
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

export default NavBar;
