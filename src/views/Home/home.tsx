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
import UserComponent from "src/views/Home/components/UsersList";
import ProjectComponent from "src/views/Home/components/ProjectListBody";
import AuthHelperMethods from "../Authentication/Register/AutherChecker";

const Auth = new AuthHelperMethods();

export default class Home extends Component<Props, State> {
    getProjectsData = () => {
        axios.create({
            baseURL: 'http://localhost:8080/ca2_Web_exploded'
        })
            .get('/projects', {
                params: {
                    projectPerPage: this.state.projectPerPage,
                    pageNumber: this.state.pageNumber,
                    jwt : Auth.getToken(),
                }
            })
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                this.setState({ projectData: response.data.projects});
                this.setState({ projectsNumber: Number(response.data.projectNumber)});
                this.setState({ indexOfLastProject: Number(response.data.elementsBeginIndex)});
            });

    };

    getUsersData = () => {
        axios.get('http://localhost:8080/ca2_Web_exploded/users', {
            params: {
                jwt : Auth.getToken(),
            }
        })
            .then((response : any) => {
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
            jobOnjaSearch: "",
            userSearch: "",
            projectSearchValue: "",
            userSearchValue: "",
            pageNumber: 1,
            projectPerPage: 10,
            projectsNumber: 0,
            indexOfLastProject: 0,
            confirm: null,
            loaded: false,
        };
        this.setPageNumb = this.setPageNumb.bind(this)
    }


    componentDidMount(): void {
        if (!Auth.loggedIn()) {
            this.props.history.replace("/login");
            console.log("is not logged in")
        } else {
            console.log("isLoggedIn")
            try {
                const confirm = Auth.getConfirm();
                console.log("confirmation is:", confirm);
                this.setState({
                    confirm: true,
                    loaded: true
                });
            } catch (err) {
                console.log("catch")
                console.log(err);
                Auth.logout();
                this.props.history.replace("/login");
            }
        }
    }

    componentWillMount = () => {
        this.getProjectsData();
        this.getUsersData();

        document.title = 'Home';

    };

    componentDidUpdate(prevProps:any , prevState:any) {

        if (this.state.indexOfLastProject !== this.state.pageNumber* this.state.projectPerPage + this.state.projectPerPage) {
            this.getProjectsData();
        }
    }

    notifyError = (msg:string) => { toast.error(msg); }

    validateSearch = (event: any) => {
        let sv = event.target.value
        var PersianOrASCII = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ۱۲۳۴۵۶۷۸۹۰a-zA-z0-9]+$/ ;
        if (!PersianOrASCII.test(sv)){
            return this.notifyError("لطفا فقط از اعداد و حروف استفاده کنید.");
        }
        this.setState({jobOnjaSearch: sv})
        return true;
    };

    getPSearchValue = (event: any) => {
        // this.setState({projectSearchValue: encodeURIComponent(event.target.value)})
        this.setState({projectSearchValue: event.target.value})
    };


    searchProjects = () => {
        axios.get('http://localhost:8080/ca2_Web_exploded/searchProjects', {
            params: {
                searchKey: this.state.projectSearchValue,
                projectPerPage: this.state.projectPerPage,
                pageNumber: this.state.pageNumber

              }
        })
            .then((response : any) => {
                if (response.status !== 200){
                    ErrorHandlerService(response);
                }
                this.setState({ projectData: response.data.projects});
            });
    }

    searchUsers = (value:any) => {
        axios.get('http://localhost:8080/ca2_Web_exploded/searchUsers', {
            params: {
                searchKey: value
            }
        })
            .then((response: any) => {
                if (response.status !== 200) {
                    ErrorHandlerService(response);
                }
                this.setState({userData: response.data.users});
            });

    };



    incProjectPerPage = () => {
        this.setState({projectPerPage: this.state.projectPerPage+1})
    };


    decProjectPerPage = () => {
        if(this.state.projectPerPage != 1)
            this.setState({projectPerPage: this.state.projectPerPage-1})
    };

    incPageNumber = () => {
        if(this.state.pageNumber != Math.ceil(this.state.projectsNumber/this.state.projectPerPage))
            this.setState({pageNumber: this.state.pageNumber+1})
    };


    decPageNumber = () => {
        if(this.state.projectPerPage != 1)
            this.setState({pageNumber: this.state.pageNumber-1})
    };

    setPageNumb = (item:any) => {
        this.setState({pageNumber: item.item})
    };


    render() {
        console.log("salam" + this.state.projectsNumber);
        const projectData:[] = this.state.projectData;

        const userData:[] = this.state.userData;


        var projects_and_users:CSSProperties = {
            marginTop: '-55px !important',
        };

        var rowStyle:CSSProperties = {
            marginRight:'2.5%',
            marginLeft: '3%',
        };

        let pageNumb:CSSProperties;

        let pagingOutput:any;
        let arr = [];
        let i;

        for (i = 0; i < Math.ceil(this.state.projectsNumber/this.state.projectPerPage) ; i++)
            arr.push(i+1);


        pagingOutput = arr.map(item => {
            if(this.state.pageNumber == item)
                pageNumb = {
                    color: "white",
                    backgroundColor: "blue",

                };

            else
                pageNumb = {
                    color : "blue",
                };

            return (<li className="page-item"><a onClick={() => this.setPageNumb({item})} style={pageNumb} href="#" className="page-link">{item}</a></li>);
        });

        if (this.state.loaded == true) {
            if (this.state.confirm) {
                console.log("confirmed!");
                return (
                    <div>
                        <NavBar/>
                        <ToastContainer rtl={true}/>
                        <TopLightComponent onClickButton={this.searchProjects} onBlurinput={this.getPSearchValue}
                                           onChangeinput={this.validateSearch}/>
                        <div className="row" style={projects_and_users}>
                            <div className="Homerow" style={rowStyle}>
                                {<ProjectListBody projects={projectData}/>}
                                {<UserList users={userData} onSearchChange={this.searchUsers}/>}
                            </div>
                        </div>
                        <div className="paging">
                            <div>
                                <ul className="pagination">
                                    <li className="page-item"><a onClick={this.decPageNumber}
                                                                 className="page-link">Previous</a></li>
                                    {pagingOutput}
                                    <li className="page-item"><a onClick={this.incPageNumber}
                                                                 className="page-link">Next</a></li>
                                    ﻿﻿
                                </ul>
                            </div>
                            <div>
                                <ul className="pagination">
                                    <li className="page-item"><a onClick={this.decProjectPerPage}
                                                                 className="page-link">-</a></li>
                                    <li className="page-item"><a className="page-link">Project Per
                                        Page: {this.state.projectPerPage}</a></li>
                                    ﻿
                                    <li className="page-item"><a onClick={this.incProjectPerPage}
                                                                 className="page-link">+</a></li>﻿﻿ ﻿
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            } else{
                console.log("not confirmed!");
                return null;
            }
        } else{
            return null;
        }
    }
}

interface State {
    projectData: [];
    userData: [];
    jobOnjaSearch: string;
    userSearch: string;
    projectSearchValue: string;
    userSearchValue: string;
    pageNumber: number;
    projectPerPage: number;
    projectsNumber: number;
    indexOfLastProject: number;
    confirm: any,
    loaded: any,
}

interface Props {
    history:any,
}