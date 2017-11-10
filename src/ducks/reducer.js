import axios from 'axios';

const initialState ={
    profile: {},
    recent_journal: [],
    bestJournal: []
}

const GET_PROFILE = 'GET_PROFILE';
const GET_RECENT = 'GET_RECENT';
const GET_BEST = 'GET_BEST';

export function getProfile(){
    const profile = axios.get('/auth/profile').then( res => res.data);
    return {
        type: GET_PROFILE,
        payload: profile
    }
}

export function getRecent(){
    const journals = axios.get('/api/findrecent').then( res => res.data);
    return {
        type: GET_RECENT,
        payload: journals
    }
}

export function getBest(){
    const bestJournal = axios.get('/api/findbest').then(res => res.data);
    return {
        type: GET_BEST,
        payload: bestJournal
    }
}

export default function reducer (state = initialState, action){
    switch (action.type) {
        case GET_PROFILE + '_FULFILLED':
            
            return Object.assign({}, state, {profile: action.payload});

        case GET_RECENT + '_FULFILLED':
        
            return Object.assign({}, state, {recent_journal: action.payload});

        case GET_BEST + '_FULFILLED':

            return Object.assign({}, state, {bestJournal: action.payload});
    
        default:

            return state;
    }
}