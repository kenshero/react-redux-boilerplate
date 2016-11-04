import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions from '../../redux/actions/formevent';
import Header from './header';
  
const  mapStateToProps = (state) => {
  return {
    // formevent : state.formevent,
    // countDate : state.countDate,
    // calendar  : state.calendar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch)
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer