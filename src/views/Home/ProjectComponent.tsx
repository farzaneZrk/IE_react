import React, { Component } from 'react';

class ProjectComponent extends Component <props, State>{
    private static projectsData = []
    constructor(props: props) {
        super(props);
        ProjectComponent.projectsData = props.projects;
        this.state = {
        };
    }

    render() {
        var linkStyle = {
            marginTop: '-35px !important'
        };

        return(

            <div className="project-block row" dir="rtl">
                <div className="col-md-12">
                    <div className="media">
                        <div className="media-right">
                            <img className="projectImage media-object" src="../images/d.jpg" alt="project image"/>
                        </div>
                        <div className="project-info media-body">
                            <h6 className="project-title media-heading"><a href="#theProject"
                                                                           className="project-link"><b>پروژه طراحی سایت
                                جاب‌اونجا</b></a><span className="project-deadline">زمان باقی‌مانده: ۱۷:۲۵</span></h6>
                            <p dir="rtl" className="project-description">تولید محتوای الکترونیک یکی از ابزارهای اساسی در
                                زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش مجازی را بدلیل نداشتن تعامل و ارتباط
                                محتوا آن را بیشتر</p>
                            <h4 className="project-budget"><b>بودجه: ۲۵۰۰ تومان</b></h4>
                            <h6 className="project-skills">مهارت‌ها:
                                <span className="skill-block">HTML</span>
                                <span className="skill-block">CSS</span>
                                <span className="skill-block">JavaScript</span>
                                <span className="skill-block">TypeScript</span>
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
    projects : []
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
