import * as actionTypes from '../actions/actions';

const initialState = {
    results : []
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ){

        case actionTypes.ADD_RECORD :
                return {
                    ...state,
                    results : state.results.concat({ id : new Date(),
                                                value : action.result})
                };

        case actionTypes.DELETE_RECORD : 
            const newResults = state.results.filter( result => result.id !== action.resultId);
            return {
                ...state,
                results : newResults
            };

        default : 
                return state;

    }
}

export default reducer;