import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import './ProjectTopInfo.scss'
import {Url} from 'url';

class ProjectTopInfo extends Component <props, State> {

    constructor(props: props) {
        super(props);
        this.state = {
            interval : null,
            deadline: null,
        };
    }

    componentDidMount = () => {
        this.setState({interval:setInterval(this.setTime,1000)});
    };

    setTime = () =>{
        let difference = Number(this.props.deadline) - new Date().getTime();
        let date = new Date(difference);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let days = date.getDay();
        console.log(difference);

        let formattedTime = days + " روز و " + hours + " ساعت و " + minutes.substr(-2)+ " دقیقه و " + seconds.substr(-2) + " ثانیه";
        this.setState({deadline: formattedTime})
    };

    render() {
        let winner;
        // this.setTime();
        if (this.props.winner !== "") {
            winner = <h4 className="winner"><span className="flaticon-check-mark"></span>برنده: {this.props.winner}</h4>
        }
        return (
            <div className="row" id="top-info">
                <div className="col-md-12">
                    <div className="media">
                        <div className="media-right">
                            <img className="media-object" src={this.props.imageURL} alt="project image"
                                 id="projectImage"/>
                        </div>
                        <div className="media-body">
                            <h1 className="media-heading" id="priojrct-name"><b>{this.props.title}</b></h1>
                            <h4 id="deadline"><span className="flaticon-deadline"></span><b>زمان باقی‌مانده:</b> <span>{this.state.deadline}</span>
                            </h4>
                            <h4 id="budget"><span
                                className="flaticon-money-bag"></span><b>بودجه: {this.props.budget} تومان</b></h4>
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

interface props {
    imageURL: string;
    title: string;
    deadline: string;
    budget: string;
    winner: string;
    description: string;
}

interface State {
    interval: any,
    deadline: any,
}