import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './actions';
import Counter from './counter';
  
const  mapStateToProps = (state) => {
  return {
    count: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counter_actions: bindActionCreators(actions, dispatch)
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer