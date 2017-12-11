/*****************************
 * Author : fazilbinzaid
 * Created on : 11-12-2017
 *****************************/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import styles from './styles';
import saga from './sagas';
import reducer from './reducers';
import actions from './actions';
import selectors from './selectors';


class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div></div>
    );
  }
}

SignUp.propTypes = {

}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga })


export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignUp);
