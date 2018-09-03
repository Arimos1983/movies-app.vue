import axios from 'axios'

export default class AuthService {

    constructor(){
        axios.defaults.baseURL = 'http://localhost:8000/api/'
        this.setAxiosDefaultAuthorizationHeader();
    }

    login(email, password){
        return axios.post('auth/login', {email, password})
        .then(response=>{
            localStorage.setItem("token", response.data.access_token);
        })
        
    }

    setAxiosDefaultAuthorizationHeader(){
        const token = localStorage.getItem("token");
        if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
    };
    isAuthenticated(){
        return !!localStorage.getItem("token");
    }

}

export const auth = new AuthService()