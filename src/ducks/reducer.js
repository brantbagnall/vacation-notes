const initialState ={
    test1: 'Hello, this is a test!',
    logged: false
}

const CHANGE_TEST = 'CHANGE_TEST';

export default function reducer (state = initialState, action){
    switch (action.type) {
        case CHANGE_TEST:
            
            return Object.assign({}, state, {test1: action.payload});
    
        default:

            return state;
    }
}
export function changeTest (test1) {
    return {
        type: CHANGE_TEST,
        payload: test1
    }
}