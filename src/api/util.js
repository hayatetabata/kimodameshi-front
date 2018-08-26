import axios from 'axios'
import * as url from './url'

export function createRequest(data, endpoint, method) {
    let params = new URLSearchParams(data)
    let config = {
        method: method,
        url: url.BASE_URL + endpoint,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
        },
    }
    let key = (method == "GET") ? "params" : "data" ;
    config[key] = params
    return axios(config);
}
