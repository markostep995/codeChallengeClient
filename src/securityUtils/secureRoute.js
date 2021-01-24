import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SecuredRoute = ({ component: Component, loggedUser, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) => {
      if (!loggedUser.validToken) {
        return <Redirect to="/" />;
      }
      return <Component {...props} />;
    }}
  />
);

SecuredRoute.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
});

export default connect(mapStateToProps)(SecuredRoute);
