import Axios from 'axios';

const LOCALDEV = true;

let endPoint = LOCALDEV ? 
                    "http://localhost:8080/api" :
                    "https://evtscan.io/api";

export const get = async (uri, params={}, headers={}) => Axios.get(endPoint + uri, { params, headers });

export const getRecent = async (thing, page=0, size=15, since=null) => {
    return get(thing.startsWith('/') ? thing : "/" + thing,
        { page, size, since }, {});
}

export const getDetail = async (thing, id) => {
    return get(( thing.startsWith('/') ? thing : "/" + thing ) + "/" + id);
}

export const getTrxOnBlock = async (id, page=0, size=30, since=null) => {
    return get(`/transaction`, {block_num: id, page, size, since});
}