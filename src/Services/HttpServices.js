import axios from 'axios';
import BackendAPI from './HttpVeriables';
const HttpServices = {
    async postWithoutHeaders (url,data) {
        return await axios({
            method: 'POST',
            url: `${BackendAPI}/${url}`,
            headers: {'content-type': 'application/json'},
            data: data
        })
    },
    async postWithHeaders (url,data) {
        return await axios({
            method: 'POST',
            url: `${BackendAPI}/${url}`,
            headers: {
                'content-type': 'application/json',
                'token' : localStorage.getItem('token')
            },
            data: data
        })
    },
    async get (url) {
        return await axios({
            method: 'POST',
            url: `${BackendAPI}/${url}`,
            headers: {
                'content-type': 'application/json',
                'token' : localStorage.getItem('token')
            }
        })
    },
}

export default HttpServices;