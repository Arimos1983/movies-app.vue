import axios from 'axios'

export default class Movies {

    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll(){
        return axios.get('movies')
        // return new Promise((resolve)=>)
    }

}

export const movies = new Movies()