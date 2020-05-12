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

        case 'DELETE_RECORD' : 
        /**
         * we know that we need to update the array immutably. we can do it in 2 ways. 
         * if we have the index of the element we want to remove, we can use the splice 
         * method but it mutates the same array so we need to create a copy first. 
         * else, we can use the filter method also, it returns a new array. 
         * 
         * const id = 2;
         * const updatedArr = [...state.results];
         * updatedArr.splice(id,1); 
         * 
         * now, here this is fine but if the array is an array of objects, the 
         * objects arr created new. here also we have array of objs. but, we dont 
         * want to modify them, we are removing them, so its fine. 
         * else, we need to make deep copy. 
         */
    

        const newResults = state.results.filter( result => result.id !== action.resultId);
        return {
            ...state,
            results : newResults
        };

        default : 
        // we can't return null here, i made an error there. 
                return state;

    }
}

export default reducer;