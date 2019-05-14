import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router-dom";


class CurveGreenButton extends Component <props, State>{
  constructor(props: props ) {
    super(props);
    this.state = {
      hover: false
    };
  }
  
  toggleHover = () =>{
    this.setState({hover: !this.state.hover})
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {
        marginBottom: '2%',
        marginTop: '2%',
        borderRadius: '4px',
        padding: '1.5%',
        fontSize: '90%',
        backgroundColor: 'rgb(253, 255, 115)',
        border: '2px solid rgb(255, 238, 0)',
        boxShadow: '0 2px 4px 0 rgb(255, 238, 0)',
        color: 'black',
        ...this.props.styles,
      }
    } else {
      linkStyle = {
        marginBottom: '2%',
        marginTop: '2%',
        borderRadius: '4px',
        backgroundColor: 'rgba(3, 128, 128, 0.911)',
        border: '2px solid rgb(3, 128, 128)',
        boxShadow: '0 2px 4px 0 rgba(4, 179, 179, 0.509)',
        color: 'white',
        padding: '1.5%',
        fontSize: '90%',
        ...this.props.styles,
      }
    }
    return(
      <div style={{display: 'inline'}}>
        <button 
          style={linkStyle}
          onClick={this.props.onClick || ''}
          type="submit"
          className="btn btn-default submint-button"
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <b>{this.props.text}</b>
        </button>
      </div>
    )
  }
}

interface State {
  hover: boolean;
}

interface props {
  onClick: any;
  styles: any;
  text: string;
}

export default CurveGreenButton;
