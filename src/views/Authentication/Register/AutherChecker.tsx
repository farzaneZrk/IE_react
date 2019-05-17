import decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';

export default class AuthHelperMethods {
    private domain: any;
    // Initializing important variables
    constructor() {
        //THIS LINE IS ONLY USED WHEN YOU'RE IN PRODUCTION MODE!
        // this.domain = domain || "http://localhost:3000"; // API server domain
    }

    getLoggedInUser = () => {
        try {
            let jwtDecode = require('jwt-decode');
            const decoded = jwtDecode(this.getToken());
            return decoded.userId

        }catch (e) {
            console.log("expired check failed! Line 42: AuthService.js");
            return
        }
    }

    login = (username:any, password:any) => {
        // Get a token from api server using the fetch api
        return this.fetch(`/log-in`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token); // Setting the token in localStorage
            return Promise.resolve(res);
        });
    };

    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken(); // Getting token from localstorage
        return (token.length != 2) && !this.isTokenExpired(token); // handwaiving here
    };

    isTokenExpired = (token:any) => {
        try {
            let jwtDecode = require('jwt-decode');
            const decoded = jwtDecode(token);
            console.log(decoded)
            return decoded.exp < Date.now() / 1000;

        } catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    };

    setToken = (idToken:any) => {
        // Saves user token to localStorage
        console.log("token is set successfully");
        localStorage.setItem("id_token", idToken);
    };

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token") || '{}';
    };

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem("id_token");
    };

    getConfirm = () => {
        // Using jwt-decode npm package to decode the token
        console.log("before Received    " + this.getToken())
        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    };

    fetch = (url:any, options:any) => {
        // performs api calls sending the required authentication headers
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization" : ""
        };
        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers["Authorization"] = "Bearer " + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
    };

    _checkStatus = (response:any )=> {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            // Success status lies between 200 to 300
            return response;
        } else {
            var error = new Error(response.statusText);
            error.message = response;
            throw error;
        }
    };
}
