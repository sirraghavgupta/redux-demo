const initialState = {
    counter : 0,
    results : []
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ){

        case 'INCREMENT' : 
                return {
                    ...state,
                    counter : state.counter + 1
                };

        case 'DECREMENT' : 
                return {
                    ...state,
                    counter : state.counter - 1
                };
                
        case 'ADD' : 
        /**
         * this is also a shallow copy of the initial state ut it does 
         * not matter because array is unchanged already. 
         */
                return {
                    ...state,
                    counter : state.counter + action.value
                };
        
        case 'SUBTRACT' : 
                return {
                    ...state,
                    counter : state.counter - action.value
                };
        
        /**
         * while updating arrays, always use concat and not push because 
         * push edits the same array and gives error in state.
         */
        case 'ADD_RECORD' : 
                return {
                    ...state,
                    results : state.results.concat({ id : new Date(),
                                                value : state.counter})
                };

        default : 
        // we can't return null here, i made an error there. 
                return state;

    }
}

export default reducer;