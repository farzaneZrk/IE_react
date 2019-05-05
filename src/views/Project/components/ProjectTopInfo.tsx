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
            deadlineIsOver: false,
        };
    }

    componentDidMount = () => {
        this.setState({interval:setInterval(this.setTime,1000)});
    };

    setTime = () =>{
        let difference = Number(this.props.deadline) - new Date().getTime();
        let hours,days,minutes,seconds;
        if(difference <= 0){
            this.setState({deadlineIsOver: true});
            this.setState({deadline: "مهلت پروژه به پایان رسیده است"});
            return;
        }

        difference /= 1000;
        console.log(difference)
        days = Math.floor(difference/60/60/24);
        hours = Math.floor((difference - days*60*60*24)/60/60);
        minutes = Math.floor((difference - days*60*60*24 - hours*60*60)/60);
        seconds = Math.floor((difference - days*60*60*24 - hours*60*60 - minutes*60));
        let formattedTime;

        if(days == 0 )
            if(hours == 0)
                if(minutes == 0)
                    formattedTime = seconds + " ثانیه";
                else
                    formattedTime =  minutes + " دقیقه و " + seconds + " ثانیه";
            else
                formattedTime = hours + " ساعت و " + minutes + " دقیقه و " + seconds+ " ثانیه";
        else
            formattedTime = days + " روز و " + hours + " ساعت و " + minutes + " دقیقه و " + seconds + " ثانیه";

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
    deadlineIsOver: boolean,

}