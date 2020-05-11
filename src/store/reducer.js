const initialState = {
    counter : 0
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
                return {
                    ...state,
                    counter : state.counter + action.value
                };
        
        case 'SUBTRACT' : 
                return {
                    ...state,
                    counter : state.counter - action.value
                };

        default : 
        // we cant return null here, i made an error there. 
                return state;

    }
}

export default reducer;