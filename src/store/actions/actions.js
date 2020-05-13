export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';


export const increment = () => {
    return {
        type : INCREMENT
    };
}

export const decrement = () => {
    return {
        type : DECREMENT
    };
}

export const add = (val) => {
    return {
        type : ADD,
        value : val
    };
}

export const subtract = (val) => {
    return {
        type : SUBTRACT,
        value : val
    };
}

export const saveResult = (res) => {
    return {
        type : ADD_RECORD,
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
        type : DELETE_RECORD,
        resultId : id
    };
}
