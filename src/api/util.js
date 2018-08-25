import axios from 'axios'
import * as url from './url'

axios.interceptors.response.use(function (response) {
    if (response.data.status !== '0') {
        // status codeはresponse.status
        return Promise.reject(response)
    }
    return response
}, function (error) {
    if (error.response.status === 401) {
        localStorage.removeItem('session')
        // location.href = '/signin'
        return null
    }
    return Promise.reject(error)
})

export default {
    createMethod(data, endpoint, needSession, method) {
        let params = new URLSearchParams()
        // if (needSession) params.append('session', localStorage.getItem('session'))
        params.append('data', JSON.stringify(data))
        return axios({
            method: method,
            url: url.BASE_URL + endpoint,
            data: params
        })
    }
}