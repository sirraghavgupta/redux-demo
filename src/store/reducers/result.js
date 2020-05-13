import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    results : []
}

const reducer = ( state = initialState, action ) => {

    switch ( action.type ){

        case actionTypes.ADD_RECORD :
            
            return updateObject( state, { results : state.results.concat( { 
                                                        id : new Date(),
                                                        value : action.result } ) 
                                                    } );


        case actionTypes.DELETE_RECORD : 

            const newResults = state.results.filter( result => result.id !== action.resultId);
            return updateObject( state, { results : newResults } );


        default : 
                return state;

    }
}

export default reducer;