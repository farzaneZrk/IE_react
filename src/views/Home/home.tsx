import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../services/error-handler-service';
import './../../styles/base.scss';
import './home.scss';
import TopLightComponent from "./TopLightComponent";
import NavBar from '../components/NavBar'
import ProjectListBody from "./ProjectListBody";
import UserList from "./UsersList";
import {CSSProperties} from "@material-ui/core/styles/withStyles";

export default class Home extends Component<Props, State> {
    getProjectsData = () => {
        axios.create({
            baseURL: 'http://localhost:8080/ca2_Web_exploded'
        })
            .get('/projects', {})
            .then((response : any) => {
                console.log(response)
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                this.setState({ projectData: response.data.projects});

            });

    };

    getUserData = () => {
        axios.get('http://localhost:8080/ca2_Web_exploded/users', {})
            .then((response : any) => {
                console.log(response)
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }

                this.setState({ userData: response.data.users});
            });
    };

    constructor(Props: Props) {
        super(Props);
        this.state = {
            projectData: [],
            userData:[],
        };
    }

    componentDidMount = () => {
        this.getProjectsData();
        this.getUserData();
    };

    // componentWillUnmount = () => {};

    render() {
        const projectData:[] = this.state.projectData;

        const userData:[] = this.state.userData;
        var projects_and_users:CSSProperties = {
            marginTop: '-35px !important',
        };

        var rowStyle = {
          marginRight:'15%',
          marginLeft: '11.5%',
        };
        return (
            <div>
                <NavBar/>
                <TopLightComponent/>
                <div style={projects_and_users}>
                    <div className="row" style={rowStyle}>
                        { projectData.length !== 0 && <ProjectListBody projects={projectData} /> }
                        { userData.length !== 0 && <UserList users={userData}/>}
                    </div>
                </div>
            </div>
        );
    }
}

interface State {
    projectData: [];
    userData: [];
}

interface Props {}