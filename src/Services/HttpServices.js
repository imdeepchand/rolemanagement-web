import axios from 'axios';
import BackendAPI from './HttpVeriables';
const HttpServices = {
    async postWithoutHeaders (url,data) {
        return await axios.post(
            `${BackendAPI}/${url}`,
            data
        )
    },
    async postWithHeaders (url,data) {
        return await axios.post(
            url= `${BackendAPI}/${url}`,
            data= data,
            // headers = {
            //     'content-type': 'application/json',
            //     'token' : localStorage.getItem('token')
            // }
        )
    },
    async get (url) {
        return await axios.get(
            url= `${BackendAPI}/${url}`,
            // headers = {
            //     'content-type': 'application/json',
            //     'token' : localStorage.getItem('token')
            // }
        )
    },
}

export default HttpServices;