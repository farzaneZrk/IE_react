import React from 'react';
import logo1 from '../images/logo/logo v1.png';
import logo2 from '../images/logo/logo v2.png';


function SlideShow() {
  return (
    <div id="slideshow">
      <div className="slide-wrapper">
        <div className="slide"><img className="slide-number" src={logo2} alt="logo" /></div>
        <div className="slide"><img className="slide-number" src={logo1} alt="logo" /></div>
        <div className="slide"><img className="slide-number" src={logo2} alt="logo" /></div>
        <div className="slide"><img className="slide-number" src={logo1} alt="logo" /></div>
        <div className="slide"><img className="slide-number" src={logo2} alt="logo" /></div>
      </div>
    </div>
  );
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

export default SlideShow;
