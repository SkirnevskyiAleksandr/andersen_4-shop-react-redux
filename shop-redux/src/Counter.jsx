import React from 'react';
import { connect } from 'react-redux';


const Counter = (props) => {

    return (
        <div onClick={props.onADD}>Counter:{props.counter}</div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return ({
        onADD: () => dispatch({ type: "DECREASE_NUMBER", number: 5 })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

