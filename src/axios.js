import axios from 'axios'

const instance = axios.create({
    baseURL: "https://zenab-tinder-backend.herokuapp.com"
})

export default instance;