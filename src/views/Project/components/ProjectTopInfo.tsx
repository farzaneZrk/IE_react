import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import './ProjectTopInfo.scss'
import { Url } from 'url';

class ProjectTopInfo extends Component <props, {}>{

render() {
  let winner;
  if (this.props.winner !== ""){
    winner = <h4 className="winner"><span className="flaticon-check-mark"></span>برنده: {this.props.winner}</h4>
  }
  return (
    <div className="row" id="top-info">
      <div className="col-md-12">
        <div className="media">
          <div className="media-right">
            <img className="media-object" src={this.props.imageURL}  alt="project image" id="projectImage" />
          </div>
          <div className="media-body">
          <h1 className="media-heading" id="priojrct-name"><b>{this.props.title}</b></h1>
          <h4 id="deadline"><span className="flaticon-deadline"></span><b>زمان باقی‌مانده:</b> ۱۷ دقیقه و ۲۵ ثانیه</h4>
          <h4 id="budget"><span className="flaticon-money-bag"></span><b>بودجه: {this.props.budget} تومان</b></h4>
          {winner}
          <h3 id="desc">توضیحات</h3>
          <p dir="rtl" id="project-description">{this.props.description}</p>
          </div>
        </div>
        <h3 id="desc2"><b>توضیحات</b></h3>
        <p dir="rtl" id="project-description2">{this.props.description}</p>
      </div>
    </div>
  );
}
}

export default ProjectTopInfo;

interface props{
  imageURL: string;
  title: string;
  deadline: string;
  budget: string;
  winner: string;
  description: string;
}
