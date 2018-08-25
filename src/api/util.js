import axios from 'axios'
import * as url from './url'

export function createRequest(data, endpoint, method) {
    let params = new URLSearchParams(data)
    let config = {
        method: method,
        url: url.BASE_URL + endpoint,
    }
    let key = (method == "GET") ? "params" : "data" ;
    config[key] = params
    return axios(config);
}