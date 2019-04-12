import React, { Component } from 'react';
import ProjectComponent from "./ProjectComponent";
import {CSSProperties} from "@material-ui/core/styles/withStyles";

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


        let renderedOutput = ProjectListBody.projectsData.map(item => {
            return (<ProjectComponent project={item} key={item['id']}/>);
        });
        // for(let i=0 ; i<ProjectListBody.projectsData.length ; i++){
        //     // console.log(ProjectListBody.projectsData[i]["id"]);
        // }
        var projectsColumn = {
            marginTop: '-125px',
        };
        return(
            <div className="col-sm-9" style={projectsColumn}>
                {renderedOutput}
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
