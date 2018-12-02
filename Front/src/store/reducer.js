import * as actionTypes from './actions';


const initialState = {
    msg : ''
}

const reducer = (state = initialState, action) => {
    console.log("Action : ", action.payload);
    switch(action.type){
        case actionTypes.MOVIE_EDIT_SUCCESS:
            return{
                ...state,
                // msg : action.payload.msg
                msg : "Success"
            }
        case actionTypes.MOVIE_CREATE_FAIL || actionTypes.MOVIE_EDIT_FAIL:
            console.log("Movie Create Failed");
            return{
                ...state,
                // msg : action.payload.msg
                msg : "Fail"
            }
        }
    
    return state;
}

export default reducer;