import axios from 'axios';

const initialState ={
    profile: {}
}

const GET_PROFILE = 'GET_PROFILE';

export function getProfile(){
    const profile = axios.get('/auth/profile').then( res => res.data);
    return {
        type: GET_PROFILE,
        payload: profile
    }
}

export default function reducer (state = initialState, action){
    switch (action.type) {
        case GET_PROFILE + '_FULFILLED':
            
            return Object.assign({}, state, {profile: action.payload});
    
        default:

            return state;
    }
}