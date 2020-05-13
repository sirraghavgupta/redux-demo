export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';


/**
 * this is an action creator. 
 * its just a function which returns the action object. 
 * we can recieve payload in this method if we want. 
 * 
 * we have name it in camelCase only. 
 * 
 * initially we used to pass the action object in the dispatch fucntion. 
 * now we call the action creator there, and it returns the action object. 
 */
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

export const addResult = (res) => {
    return {
        type : ADD_RECORD,
        result : res
    };
}

export const deleteResult = (id) => {
    return {
        type : DELETE_RECORD,
        resultId : id
    };
}

/**
 * we can use action listeners for synchronous code also, 
 * it makes the code more clean as all the action objects are now 
 * at one place. 
 */