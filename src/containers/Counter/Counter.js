import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


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
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onIncrementHandler : () => dispatch( actionCreators.increment() ),
        onDecrementHandler : () => dispatch( actionCreators.decrement() ),
        onAdditionHandler : () => dispatch( actionCreators.add(5) ),
        onSubtractionHandler : () => dispatch( actionCreators.subtract(5) ),
        onAddRecordHandler : (currCount) => dispatch( actionCreators.addResult(currCount) ),
        onDeleteRecordHandler : (id) => dispatch( actionCreators.deleteResult(id) )
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);