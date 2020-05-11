import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';


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

                <button onClick = { this.props.onAddRecordHandler }>add record</button>

                <ul>
                    { this.props.storedResults.map( ( result ) =>
                        <li onClick = { this.props.onDeleteRecordHandler }
                            key = { result.id } > {result.value} </li>
                    ) }
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr : state.counter,
        storedResults : state.results
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
        onIncrementHandler : () => dispatch({ type : 'INCREMENT' }),
        onDecrementHandler : () => dispatch({ type : 'DECREMENT' }),
        onAdditionHandler : () => dispatch({ type : 'ADD', value : 5 }),
        onSubtractionHandler : () => dispatch({ type : 'SUBTRACT', value : 5 }),
        onAddRecordHandler : () => dispatch({ type : 'ADD_RECORD'}),
        onDeleteRecordHandler : () => dispatch({ type : 'DELETE_RECORD'})
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
 * 
 * 
 */