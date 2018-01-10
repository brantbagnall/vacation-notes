import axios from 'axios';

const initialState ={
    profile: {},
    recent_journal: [],
    bestJournal: [],
    journal: [],
    allBest: [],
    allRecent: [],
    search:[],
    editorsChoice: []
}

const GET_PROFILE = 'GET_PROFILE';
const GET_RECENT = 'GET_RECENT';
const GET_BEST = 'GET_BEST';
const GET_JOURNAL = 'GET_JOURNAL';
const GET_BEST_FRONT_PAGE = 'GET_BEST_FRONT_PAGE';
const GET_ALL_RECENT = 'GET_ALL_RECENT';
const GET_SEARCH = 'GET_SEARCH';
const DISLIKE = 'DISLIKE';
const LIKE = 'LIKE';
const EDITOR = 'EDITOR';

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
    const journal = axios.get('/api/findjournal/' + id).then(res => res.data);
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

export function getSearch(act, env, actLev, time, keyword){

    if(act === 'Any'){
        act = '%';
    }

    if(env === 'Any'){
        env = '%';
    }

    if(actLev === 'Any'){
        actLev = '%';
    }

    if(time === 'Any'){
        time = '%';
    } else if(time !== '13 or more' && time !== 'Any'){
        time = time.split('-');
    }

    if(keyword === ''){
        keyword = '%';
    } else {
        keyword = '%' + keyword + '%'
    }



    const search = axios.put('/api/search', {act, env, actLev, time, keyword}).then(res => res.data);
    return {
        type: GET_SEARCH,
        payload: search
    }
}

export function likePost(postId, user_id){
    const like = axios.put('/api/upvote', {postId, user_id}).then(res => res.data);
    return {
        type: LIKE,
        payload: like
    }
}

export function dislikePost(postId, user_id){
    const dislike = axios.put('/api/downvote', {postId, user_id}).then(res => res.data);
    return {
        type: DISLIKE,
        payload: dislike
    }
}

export function getEditor(){
    const editor = axios.get('/api/editorschoice').then(res => {
        return res.data
    })
    return {
        type: EDITOR,
        payload: editor
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

        case GET_SEARCH + '_FULFILLED':
        
            return Object.assign({}, state, {search: action.payload});
            
        case LIKE + '_FULFILLED':
        
            return Object.assign({}, state, {journal: action.payload});

        case DISLIKE + '_FULFILLED':
        
            return Object.assign({}, state, {journal: action.payload});
        
        case EDITOR + '_FULFILLED':
        
            return Object.assign({}, state, {editorsChoice: action.payload});
    
        default:

            return state;
    }
}