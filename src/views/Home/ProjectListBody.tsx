import React, { Component } from 'react';
import ProjectComponent from "./ProjectComponent";

class ProjectListBody extends Component <props, State>{
    constructor(props: props) {
        super(props);
        this.state = {
        };
    }

    render() {

        let renderedOutput = this.props.projects.map(item => {
            return (<ProjectComponent key={item['id']} project={item}/>);
        });

        let projectsColumn = {
            marginTop: '-50px',
            marginBottom: '10%',
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
