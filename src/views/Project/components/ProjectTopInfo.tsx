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
    // setTime = () =>{
    //     var time_in_minutes = 10;
    //     // console.log(Number(this.props.deadline));
    //     // var time_in_minutes = 20;
    //     var current_time = new Date().getTime();
    //     var deadline = new Date(current_time + time_in_minutes*60*1000);
    //
    //
    //     function time_remaining(endtime:any){
    //         var t = endtime.getTime() - new Date().getTime();
    //         var seconds = Math.floor( (t/1000) % 60 );
    //         var minutes = Math.floor( (t/1000/60) % 60 );
    //         var hours = Math.floor( (t/(1000*60*60)) % 24 );
    //         var days = Math.floor( t/(1000*60*60*24) );
    //         return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
    //     }
    //     function run_clock(id:any,endtime:any){
    //         var clock = document.getElementById(id);
    //         function update_clock(){
    //             var t = time_remaining(endtime);
    //             if(clock != null){
    //
    //                 clock.innerHTML = t.hours + ":" + t.minutes + ":" + t.seconds;
    //                 console.log( t.hours + ":" + t.minutes + ":" + t.seconds);
    //             }
    //             if(t.total<=0){ clearInterval(timeinterval); }
    //         }
    //         update_clock(); // run function once at first to avoid delay
    //         var timeinterval = setInterval(update_clock,1000);
    //     }
    //     run_clock('clock',deadline);
    // };

    componentDidMount = () => {
        this.setState({interval:setInterval(this.setTime,1000)});
    };

    setTime = () =>{
        let difference = Number(this.props.deadline) - new Date().getTime();
        let date = new Date(difference);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + " ساعت و" + minutes.substr(-2)+ " دقیقه و " + seconds.substr(-2) + " ثانیه";
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