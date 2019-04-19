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
      <div>
        <h3 id="label">ثبت پیشنهاد</h3>
        <div className="input-box">
          <input 
            dir="ltr"
            placeholder="پیشنهاد خود را وارد کنید"
            className="price-box"
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            title="مبلغ پیشنهادی خود را با اعداد انگلیسی وارد کنید"
            pattern="[1-9]+[.]{0,1}[0-9]+"
          />
          <span className="unit" dir="ltr">تومان</span>
          <button 
            className="send-button"
            type="submit"
            onClick={this.props.onClick}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            ارسال
          </button>
        </div>
      </div>
    );
  }
}

export default BidBox;

interface State {
  hover: boolean,
}

interface props{
  onChange: any;
  onBlur: any;
  onClick: any;
}
