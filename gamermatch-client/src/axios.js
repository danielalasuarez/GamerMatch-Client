//axios makes http request easy

import axios from 'axios'

const instance = axios.create({
    //pull from local backend 
    // baseURL: 'http://localhost:8001'

    //pull from heroku backend 
    baseURL: 'https://gamermatch-backend.herokuapp.com'
})
export default instance;