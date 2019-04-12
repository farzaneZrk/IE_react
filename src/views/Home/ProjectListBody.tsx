import React, { Component } from 'react';
import ProjectComponent from "./ProjectComponent";

class ProjectListBody extends Component <props, State>{
    private static projectsData = [];
    constructor(props: props) {
        super(props);
        ProjectListBody.projectsData = props.projects;
        this.state = {
        };
    }

    render() {
        // var elementsDiv = "";
        var projects_and_users = {
            marginTop: '-35px !important',
        };

        var renderedOutput = ProjectListBody.projectsData.map(item => <ProjectComponent project={item}/>)

        // for(let i=0 ; i<ProjectListBody.projectsData.length ; i++){
        //     // console.log(ProjectListBody.projectsData[i]["id"]);
        // }
        var projectsColumn = {
            marginTop: '-90px',
        };
        return(
            <div style={projects_and_users}>
                <div className="row">
                    <div className="col-sm-9" style={projectsColumn}>
                        {renderedOutput}
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

export default ProjectListBody;
