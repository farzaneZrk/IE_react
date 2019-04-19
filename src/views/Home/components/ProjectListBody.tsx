import React, { Component } from 'react';
import ProjectComponent from "./ProjectComponent";
import {CSSProperties} from "@material-ui/core/styles/withStyles";

class ProjectListBody extends Component <props, State>{
    constructor(props: props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let renderedOutput:any;
        renderedOutput = this.props.projects.map(item => {
            return (<ProjectComponent key={item['id']} project={item}/>);
        });

        if(this.props.projects.length === 0){
            let textStyle:CSSProperties = {
                padding: '10%',
                paddingLeft: '2%',
                paddingRight: '2%',
                marginBottom: '1.5%',
                background: 'white',
                boxShadow: "0 12px 14px 0 rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
                textAlign: "center",
            }
            renderedOutput = <h4 style={textStyle} dir="rtl"><span className="flaticon-danger" /> متاسفانه در حال حاضر هیچ پروژه‌ی مناسبی برای شما وجود ندارد!</h4>
        }

        let projectsColumn = {
            marginTop: '-60px',
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
