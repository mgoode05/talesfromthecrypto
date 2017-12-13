import tokenService from './tokenService';

const BASE_URL = '/api/watchlist';

function index() {
    return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad creds');
    })
    .then(scores => scores);
}

/*---helper functions */

function getAuthRequestOptions(method) {
    return {
        method,
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    }
}

export default {
    index
};
