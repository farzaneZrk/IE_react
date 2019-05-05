import React, { Component } from 'react';
import axios from 'axios';
import { ErrorHandlerService } from '../../services/error-handler-service';
import './../../styles/base.scss';
import './home.scss';
import TopLightComponent from "./components/TopLightComponent";
import NavBar from '../components/NavBar'
import ProjectListBody from "./components/ProjectListBody";
import UserList from "./components/UsersList";
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Home extends Component<Props, State> {
    getProjectsData = () => {
        axios.create({
            baseURL: 'http://localhost:8080/ca2_Web_exploded'
        })
            .get('/projects', {})
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                this.setState({ projectData: response.data.projects});
                console.log(response.data)
            });

    };

    getUsersData = () => {
        axios.get('http://localhost:8080/ca2_Web_exploded/users', {})
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                this.setState({ userData: response.data.users});
                console.log(response.data.users);
            });
    };

    constructor(Props: Props) {
        super(Props);
        this.state = {
            projectData: [],
            userData:[],
            jobOnjaSearch: "",
            userSearch: "",
            projectSearchValue: "",
            userSearchValue: "",
        };
    }

    componentDidMount = () => {
        this.getProjectsData();
        this.getUsersData();

        document.title = 'Home';

    };

    notifyError = (msg:string) => { toast.error(msg); } 

    validateSearch = (event: any) => {
        let sv = event.target.value
        var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ۱۲۳۴۵۶۷۸۹۰a-zA-z0-9]+$/ ;
        if (!PersianOrASCII.test(sv)){
            return this.notifyError("لطفا فقط از اعداد و حروف استفاده کنید.");
        }
        this.setState({jobOnjaSearch: sv})
        return true;
    }

    getPSearchValue = (event: any) => {
        // this.setState({projectSearchValue: encodeURIComponent(event.target.value)})
        this.setState({projectSearchValue: event.target.value})
    }

    searchProjects = () => {
        axios.get('http://localhost:8080/ca2_Web_exploded/searchProjects', {
            params: {
                searchKey: this.state.projectSearchValue
              }
        })
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                // this.setState({ userData: response.data.users});
                console.log(response.data);
            });
    }

    render() {
        const projectData:[] = this.state.projectData;

        const userData:[] = this.state.userData;


        var projects_and_users:CSSProperties = {
            marginTop: '-55px !important',
        };

        var rowStyle:CSSProperties = {
            marginRight:'2.5%',
            marginLeft: '3%',
        };

        return (
            <div>
                <NavBar/>
                <ToastContainer rtl={true}/>
                <TopLightComponent onClickButton={this.searchProjects} onBlurinput={this.getPSearchValue} onChangeinput={this.validateSearch} />
                <div style={projects_and_users}>
                    <div className="Homerow" style={rowStyle}>
                        { projectData.length >= 0 && <ProjectListBody projects={projectData} /> }
                        { userData.length !== 0 && <UserList users={userData} onSearchChange={this.validateSearch} />}
                    </div>
                </div>
            </div>
        );
    }
}

interface State {
    projectData: [];
    userData: [];
    jobOnjaSearch: string;
    userSearch: string;
    projectSearchValue: string;
    userSearchValue: string;
}

interface Props {}