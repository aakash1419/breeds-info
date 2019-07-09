import {GET_ALL_BREEDS} from './actions';

export const BreedList = (state = {breeds: 'first'}, action) => {
    switch(action.type){
        case GET_ALL_BREEDS:
            return({...state, breeds: action.payload})
        default:
            return state;    
    }
}