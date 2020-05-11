const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

// reducer
/**
 * reducer and store are very strongly dependent on each other, bcoz
 * reducer is the only one which can change the state. so, we need to 
 * give the reduce while creating the store itself. 
 * 
 * reducer takes 2 args = old state and the action and returns the new state.
 * 
 * we need to tie the reducer to some state. if we dont give that, we get 
 * undefined when we do store.getState(). so, we assign a default state that
 * if it doesnt get any state in the beginning, then it will use that. 
 */
const rootReducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1
        };
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
        };
    }

    return state;
}


// store
const store = createStore(rootReducer);
console.log(store.getState());



/**
 * subcription comes before the action dispatch so that it knows about that. 
 * subscribe method takes some code as an argument which runs everytime there
 * is some change in the state. 
 */
// subscsription
store.subscribe( () => {
    console.log('[SUBSCRIPTION] ', store.getState());
} );


// dispatching action
/**
 * how to create action - 
 * use the dispatch method. it takes the action object as an argument. 
 * it should always have the type prop which should be in all caps as 
 * per the convention. now, we can have as many other props as we want. 
 * we can also include the optional payload prop if we want. 
 * then, we just implement the code for the action in the reducer. 
 */
store.dispatch({ type : 'INC_COUNTER' });
// console.log(store.getState());

store.dispatch({ type : 'ADD_COUNTER', value : 10 });
// console.log(store.getState());

// console.log(initialState);

