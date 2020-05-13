import * as actionTypes from './actionTypes'; 

export const saveResult = (res) => {
    return {
        type : actionTypes.ADD_RECORD,
        result : res
    }
}

export const addResult = (res) => {
    /**
     * getState is an extra method which is provided as an arg ny thunk to this
     * method. by this, we can access the state in the action creator if we need. 
     * but dont overuse this. rather try to send the action object itself if u know 
     * that u need it. 
     * in special deserving circumstances, we can use this for sure. 
     */
    return ( dispatch, getState ) => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        setTimeout( () => dispatch(saveResult(res)), 3000 );
    }     
}

export const deleteResult = (id) => {
    return {
        type : actionTypes.DELETE_RECORD,
        resultId : id
    };
}