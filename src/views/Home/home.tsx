import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../services/error-handler-service';
import './../../styles/base.scss';
import './home.scss';
import TopLightComponent from "./TopLightComponent";
import NavBar from '../components/NavBar'
import ProjectListBody from "./ProjectListBody";

export default class Home extends Component<Props, State> {
    getProjectsData = () => {
        axios.create({
            baseURL: 'http://localhost:8080/mysite/'
        })
            .get('/projects', {})
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                // console.log(response.data.projects);
                this.setState({ data: response.data.projects});

            });

    };

    constructor(Props: Props) {
        super(Props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        this.getProjectsData();
    };

    // componentWillUnmount = () => {};

    render() {
        const data:[] = this.state.data;

        return (
            <div>
                <NavBar loginReference="./register"/>
                <TopLightComponent/>
                { data.length !== 0 && <ProjectListBody projects={data} /> }
            </div>
        );
    }
}

interface State {
    data: [];
}

interface Props {}