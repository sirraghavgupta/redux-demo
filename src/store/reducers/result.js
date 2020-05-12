import * as actionTypes from '../../store/actions';

const initialState = {
    results : []
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ){

        /**
         * while updating arrays, always use concat and not push because 
         * push edits the same array and gives error in state.
         */
        case actionTypes.ADD_RECORD : 
                return {
                    ...state,
                /**
                 * we cant acces the state of one reducer into another reducer. 
                 * so, now we dont get access to counter here and we need to get that 
                 * with action object.
                 */
                    results : state.results.concat({ id : new Date(),
                                                value : action.result})
                };

        case actionTypes.DELETE_RECORD : 
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