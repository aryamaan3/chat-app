import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:9000" //à changer en fonction du serveur
})

export default instance;