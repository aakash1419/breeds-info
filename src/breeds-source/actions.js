import axios from 'axios';


export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';

export const getAllBreeds = () => {
    return(
        dispatch => {
            axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return(dispatch({type: GET_ALL_BREEDS, payload: res.data}))
            })
        }
    )
}