import axios from "axios";

export const signUp  = (body) =>{
    return axios.post('http://localhost:8093/api/save', body)
}