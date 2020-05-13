import * as actionTypes from './actionTypes'; 

export const saveResult = (res) => {
    return {
        type : actionTypes.ADD_RECORD,
        result : res
    }
}

export const addResult = (res) => {
    return dispatch => {
        setTimeout( () => dispatch(saveResult(res)), 3000 );
    }     
}

export const deleteResult = (id) => {
    return {
        type : actionTypes.DELETE_RECORD,
        resultId : id
    };
}