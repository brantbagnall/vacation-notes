import axios from 'axios';

const initialState ={
    profile: {},
    recent_journal: []
}

const GET_PROFILE = 'GET_PROFILE';
const GET_RECENT = 'GET_RECENT';

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

export default function reducer (state = initialState, action){
    switch (action.type) {
        case GET_PROFILE + '_FULFILLED':
            
            return Object.assign({}, state, {profile: action.payload});

        case GET_RECENT + '_FULFILLED':
        
            return Object.assign({}, state, {recent_journal: action.payload});
    
        default:

            return state;
    }
}