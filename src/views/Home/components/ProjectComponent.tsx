import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";

class ProjectComponent extends Component <props, State> {
    constructor(props: props) {
        super(props);
        this.state = {
            projectTitleHover: false,
            projectBlockHover: false,
        };
    }

    toggleProjectTitle = () =>{
        this.setState({projectTitleHover: !this.state.projectTitleHover})
    };

    toggleProjectBlock = () =>{
        this.setState({projectBlockHover: !this.state.projectBlockHover})
    };

    convertToPersianNumber = (input:any) => {
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        var persianMap = persianDigits.split("");
        return input.replace(/\d/g,function(m:any){
            return persianMap[parseInt(m)];
        });
    };

    render() {
        let skillBlock:CSSProperties = {
            backgroundColor: "rgba(211, 211, 211, 0.294)",
            border: "1px solid rgba(211, 211, 211, 0.356)",
            borderRadius: "2px",
            margin: "0.5%",
            color: "rgb(104, 103, 103)",
            padding: "0.4%",
            fontSize: "85%",
            fontWeight: "bold",
        };

        let renderSkills = (this.props.project["skills"] as []).map(item => 
            <span
                style={skillBlock}
                key={item["name"]}
            >
                {item["name"]}
            </span>
        );


        let projectBlock;
        if(!this.state.projectBlockHover){
            projectBlock= {
                padding: '3%',
                paddingLeft: '0',
                paddingRight: '1%',
                marginBottom: '1.5%',
                marginLeft: '5%',
                borderRadius: '6px',
                background: 'white',
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            };
        }
        else{
            projectBlock= {
                padding: '3%',
                paddingLeft: '0',
                paddingRight: '1%',
                marginBottom: '1.5%',
                marginLeft: '5%',
                background: 'white',
                boxShadow: "0 12px 14px 0 rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
            };
        }


        let projectImage = {
            borderRadius: '2px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            border: '2px solid lightgray',
            width: '10em',
            height: '10em',
        };

        let projectInfo = {
            paddingRight: '2%',
            paddingTop: '0.5%',
            paddingLeft: '0',
        };

        let projectTitle = {
            fontSize: '150%',
            marginBottom: '2%',
            color: 'black',
        };

        let projectLink;
        if(!this.state.projectTitleHover){
            projectLink = {
                color: 'black',
                fontSize: "95%",
            };
        }
        else {
            projectLink = {
                textDecoration : "none",
                color: "rgb(223, 47, 70)",
                // fontSize: "105%",
            }
        }

        let projectDeadline: CSSProperties = {
            backgroundColor: 'rgba(211, 211, 211, 0.294)',
            borderRadius: '2px',
            color: 'gray',
            padding: '0.5%',
            fontSize: '59%',
            position: 'absolute',
            left: '3%',
        };

        let projectDescription = {
            fontSize: '90%',
            color: 'rgba(31, 30, 30, 0.835)',
        };

        let projectBudget = {
            color: 'rgb(1, 146, 146)',
            marginBottom: '2%',
        };

        let projectSkills = {
            color: 'rgb(156, 156, 156)',
        };

        var date = new Date(this.props.project["deadline"]*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);

        return (
            <div className="row"
                 dir="rtl"
                 style={projectBlock}
                 onMouseEnter={this.toggleProjectBlock}
                 onMouseLeave={this.toggleProjectBlock}
            >
                <div className="col-md-12">
                    <div className="media">
                        <div className="media-right">
                            <img style={projectImage} className="media-object"
                                 src={this.props.project["imageURL"]} alt="project image"/>
                        </div>
                        <div style={projectInfo} className="media-body">
                            <h6 style={projectTitle} className="media-heading">
                                <a href={"projects/" + this.props.project["id"]}
                                   style={projectLink}
                                   onMouseEnter={this.toggleProjectTitle}
                                   onMouseLeave={this.toggleProjectTitle}>
                                    <b>{this.props.project["title"]}   </b>
                                </a>
                                <span
                                    style={projectDeadline}>زمان باقی‌مانده: {formattedTime}</span>
                            </h6>
                            <p dir="rtl" style={projectDescription}>{this.props.project["description"]}</p>
                            <h4 style={projectBudget}><b>بودجه:{this.convertToPersianNumber(this.props.project["budget"].toString())} تومان</b></h4>
                            <h6 style={projectSkills}><b>مهارت‌ها:</b>
                                {renderSkills}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface State {
    projectTitleHover: boolean,
    projectBlockHover: boolean,
}

interface props {
    project: any,
}

export default ProjectComponent;
