import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {

        return (
            <div>
                
                <CounterOutput value={this.props.ctr} />

                <CounterControl label="Increment"  clicked={ this.props.onIncrementHandler } />
                <CounterControl label="Decrement"  clicked={ this.props.onDecrementHandler }  />
                <CounterControl label="Add 5"      clicked={ this.props.onAdditionHandler }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtractionHandler }  />
                <hr/>

                <button onClick = { () => this.props.onAddRecordHandler(this.props.ctr) }>add record</button>

                <ul>
                    { this.props.storedResults.map( ( result ) =>
                    // see how to pass the id of the element on click, good. 
                        <li onClick = { () => this.props.onDeleteRecordHandler(result.id) }
                            key = { result.id } > {result.value} </li>
                    ) }
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    /**
     * now, we cant access the counter by state.counter because we have global 
     * state now and we refer to that. 
     * so, we say like give me counter from the ctr inside the global state. 
     * like global state is merged state of the 2 reducer states ctr and red as
     * specified in the index.js file. 
     */
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
}

/**
 * we have hooked the app with the store but how do we access the state inside 
 * the containers. we use connect for that. 
 * its a function which on execution returns a higher order component in which 
 * we wrap the component. this hoc given by conect will allow us to access the
 * state from the store in the component. 
 * 
 * we need to pass 2 things into the connect. one is the info about the slices 
 * we want to access in this conatiner and the other is the actions which 
 * this container will dispatch. 
 * 
 * this is the react way of creating subscriptions.
 * 
 * mapStateToProps means that we are mapping the state from the store to the
 * props in this container as we no longer can and want to access the state 
 * in the container. we also get props because we cant edit them. so we 
 * can use actions only. so the redux flow is maintained. 
 * 
 * here we will get ctr as a prop to access the counter in the state. 
 */


const mapDispatchToProps = dispatch => {
    return {
        onIncrementHandler : () => dispatch({ type : actionTypes.INCREMENT }),
        onDecrementHandler : () => dispatch({ type : actionTypes.DECREMENT }),
        onAdditionHandler : () => dispatch({ type : actionTypes.ADD, value : 5 }),
        onSubtractionHandler : () => dispatch({ type : actionTypes.SUBTRACT, value : 5 }),
        /**
         * pay attention to how we pass the current counter value to the action. 
         * see in the event listeners above in the JSX. 
         */
        onAddRecordHandler : (currCount) => dispatch({ type : actionTypes.ADD_RECORD, result : currCount}),

        // see how to pass the id of the element. 
        onDeleteRecordHandler : (id) => dispatch({ type : actionTypes.DELETE_RECORD, resultId : id })
    };
}
/**
 * now here we see that we get the dispath method from the redux automatically. 
 * like we had the store.dispatch() method when we implement redux without 
 * react. 
 * now, we need to pass the functions as props here and those functions are
 * arrow functions which simply call the dispatch method just like we used to 
 * dispatch methods in redux without react. 
 * now, we get this onIncrementHandler as props in this component. 
 */


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/**
 * here we always need to pass mapStateToProps or null otherwise. 
 * else mapDispatchToProps is optional. 
 */


/**
 * note - 
 * we can dispatch methods which we dont even handle in the reducer, they 
 * simply get ignored in the reducer due to switch and we return the same old
 * state. 
 * 
 * when we return the state in the reducer, it doesnt merge that with the old 
 * state, it just replaces that. so, we need to spread the initial state and 
 * then return the new state. 
 */