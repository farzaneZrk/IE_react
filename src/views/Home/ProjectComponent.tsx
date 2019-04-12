import React, { Component } from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";

class ProjectComponent extends Component <props, State>{
    private static projectData : any;
    constructor(props: props) {
        super(props);
        ProjectComponent.projectData = props.project;
        this.state = {
        };
    }

    render() {
        var renderSkills = (ProjectComponent.projectData["skills"] as [] ).map(item => <span className="skill-block"> {item["name"]} </span>);

        var projectBlock = {
            padding: '3%',
            paddingLeft: '0',
            paddingRight: '1%',
            marginBottom: '-1.5%',
            marginLeft:'5%',
            borderRadius: '4px',
            background: 'white',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',

        };

        var projectImage = {
            borderRadius: '2px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            border: '2px solid lightgray',
            width: '10em',
            height: '10em',
        };

        var projectInfo = {
            paddingRight: '2%',
            paddingTop: '0.5%',
            paddingLeft: '0',
        };

        var projectTitle = {
            fontSize: '150%',
            marginBottom: '2%',
            color: 'black',
        };

        var projectLink = {
            color: 'black',
        };

        var projectDeadline:CSSProperties = {
            backgroundColor: 'rgba(211, 211, 211, 0.294)',
            borderRadius: '2px',
            color: 'gray',
            padding: '0.5%',
            fontSize: '59%',
            position: 'absolute',
            left: '3%',
        };

        var projectDescription = {
            fontSize: '90%',
            color: 'rgba(31, 30, 30, 0.835)',
        };

        var projectBudget = {
            color: 'rgb(1, 146, 146)',
            marginBottom: '2%',
        };

        var projectSkills = {
            color: 'rgb(156, 156, 156)',
        };

        return(
            <div className="row" dir="rtl" style={projectBlock}>
                <div className="col-md-12">
                    <div className="media">
                        <div className="media-right">
                            <img style={projectImage} className="media-object" src={ProjectComponent.projectData["imageURL"]} alt="project image"/>
                        </div>
                        <div style={projectInfo} className="media-body">
                            <h6 style={projectTitle} className="media-heading">
                                <a href="#theProject" style={projectLink}>
                                    <b>{ProjectComponent.projectData["title"]}   </b>
                                </a>
                                <span style={projectDeadline}>زمان باقی‌مانده: {ProjectComponent.projectData["deadline"]}</span>
                            </h6>
                            <p dir="rtl" style={projectDescription}>{ProjectComponent.projectData["description"]}</p>
                            <h4 style={projectBudget}><b>بودجه:{ProjectComponent.projectData["budget"]} تومان</b></h4>
                            <h6 style={projectSkills}>مهارت‌ها:
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
}

interface props {
    project : any,
}

export default ProjectComponent;


// import React from 'react';
//
// function ProjectComponent(Props) {
//   return (
//     <div className="project-block row" dir="rtl">
//       <div className="col-md-12">
//         <div className="media">
//           <div className="project-info media-body">
//             <h6 className="project-title media-heading">
//               <a href="#theProject" className="project-link">
//                 <b>
//                     1234
//                 </b>
//               </a>
//               <span className="project-deadline">زمان باقی‌مانده: ۱۷:۲۵</span>
//             </h6>
//             <p dir="rtl" className="project-description">
//               {' '}
// تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری
//                              افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط محتوا آن را
//                              بیشتر
//             </p>
//             <h4 className="project-budget"><b>بودجه: ۲۵۰۰ تومان</b></h4>
//             <h6 className="project-skills">
//                              مهارت‌ها:
//               <span className="skill-block">HTML</span>
//               <span className="skill-block">CSS</span>
//               <span className="skill-block">JavaScript</span>
//               <span className="skill-block">TypeScript</span>
//             </h6>
//           </div>
//         </div>
//       </div>
//       {Props.children}
//     </div>
//   );
// }
//
// export default ProjectComponent;
