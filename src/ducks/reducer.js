import axios from 'axios';

const initialState ={
    profile: {},
    recent_journal: [],
    bestJournal: [],
    journal: [],
    allBest: [],
    allRecent: []
}

const GET_PROFILE = 'GET_PROFILE';
const GET_RECENT = 'GET_RECENT';
const GET_BEST = 'GET_BEST';
const GET_JOURNAL = 'GET_JOURNAL';
const GET_BEST_FRONT_PAGE = 'GET_BEST_FRONT_PAGE';
const GET_ALL_RECENT = 'GET_ALL_RECENT';

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

export function getJournal(id){
    const journal = axios.get('/api/findjournal' + id).then(res => res.data);
    return {
        type: GET_JOURNAL,
        payload: journal
    }
}

export function getAllBest(){
    const allBest = axios.get('/api/allbest').then(res => res.data);
    return {
        type: GET_BEST_FRONT_PAGE,
        payload: allBest
    }
}

export function getAllRecent(){
    const allRecent = axios.get('/api/allrecent').then(res => res.data);
    return {
        type: GET_ALL_RECENT,
        payload: allRecent
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

        case GET_JOURNAL + '_FULFILLED':

            return Object.assign({}, state, {journal: action.payload});

        case GET_BEST_FRONT_PAGE + '_FULFILLED':

            return Object.assign({}, state, {allBest: action.payload});

        case GET_ALL_RECENT + '_FULFILLED':
        
            return Object.assign({}, state, {allRecent: action.payload});
    
        default:

            return state;
    }
}