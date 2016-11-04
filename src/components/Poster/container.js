import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './actions';
import Poster from './poster';

const  mapStateToProps = (state) => {
  return {
    posts: state.poster
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    poster_actions: bindActionCreators(actions, dispatch)
  }
}

const PosterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Poster)

export default PosterContainer