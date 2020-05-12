import * as actionTypes from '../actions';

const initialState = {
    counter : 0
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ){

        case actionTypes.INCREMENT : 
                return {
                    ...state,
                    counter : state.counter + 1
                };

        case actionTypes.DECREMENT : 
                return {
                    ...state,
                    counter : state.counter - 1
                };
                
        case actionTypes.ADD : 
        /**
         * this is also a shallow copy of the initial state ut it does 
         * not matter because array is unchanged already. 
         */
                return {
                    ...state,
                    counter : state.counter + action.value
                };
        
        case actionTypes.SUBTRACT : 
                return {
                    ...state,
                    counter : state.counter - action.value
                };

        default : 
        // we can't return null here, i made an error there. 
                return state;

    }
}

export default reducer;