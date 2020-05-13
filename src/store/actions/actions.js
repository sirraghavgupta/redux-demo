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

// synchronous action creator for addResult
export const saveResult = (res) => {
    return {
        type : ADD_RECORD,
        result : res
    }
}

/**
 * its a rule that only action OBJECTS can make a change the reducer. 
 * 
 * normally when we try to execute asycnc code here in the action creator or the reducer, then they 
 * dont return anything, so we get undefined. because, the async code keeps running and we get out 
 * of the function of the switch block and return empty hand. so, we cant execute the async code 
 * like this. 
 * 
 * for this, we have thunk. it allows us to run async code with the action creator. 
 * it allows us to return a function instead of the action object from the action creator. 
 * now, the normal flow will try to dispatch the function and will succeed [ without thunk we were
 * unable to dispatch the function throught next() ]. now, as we dispatched the function, thunk has 
 * the ability to catch it in between. now, it executes the method and there we have the async code. 
 * thunk has the ability to wait and call dispatch() when it wants. so, when the async task gets 
 * finished, now it dispatches the action object. where it will come from? - so we need to create 
 * another synchronous actionCreator for the same which will provide the action object. as we 
 * compulsorily need to return the action object only. and now, it goes to the reducer and again the 
 * middleware will be trigggered but not thunk, because we are not dispatching function now. 
 * we are dispatching object. so, it will reach the reducer. 
 * 
 * awesome!!! 
 */
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

/**
 * we can use action listeners for synchronous code also, 
 * it makes the code more clean as all the action objects are now 
 * at one place. 
 */