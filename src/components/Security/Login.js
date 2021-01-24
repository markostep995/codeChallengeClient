import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, deleteErrors } from '../../actions/securityActions';
import Breadcrumb from '../Breadcrumb/index';
import LoadingIndicator from '../Reusable/LoadingIndicator';
import { handleErrorMessage } from '../../utils.js';
import InputField from '../Reusable/InputField';
import withTranslations from '../../utils/HighOrderComponent';
import ErrorHandler from '../Reusable/ErrorHandler';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.loggedUser.validToken) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClientValidation = () => {
    let hasError = false;

    let errors = {};

    if (!this.state.username) {
      errors['username'] = this.props.t.Errors.username;
      hasError = true;
    }

    if (!this.state.password) {
      errors['password'] = this.props.t.Errors.password;
      hasError = true;
    }

    this.setState({ errors });
    return hasError;
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.handleClientValidation() === true) {
      return;
    }

    const LoginRequest = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(LoginRequest, this.props.history);
  };

  render() {
    const { loading } = this.props.loggedUser;
    const { error } = this.props.errors || {};
    const serverError = this.props.errors;

    var errorStyle = {
      color: 'red',
    }; 

    const translation = this.props.t;

    return (
      <div>
        <Breadcrumb />

        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="card">
                <div className="card-body text-center">
                  {loading ? (
                    <LoadingIndicator />
                  ) : (
                    <div>
                      <div className="mb-4">
                        <i style={{ color: 'aqua' }} class="fas fa-lock "></i>
                      </div>
                      <h3 className="mb-4">{translation.Login}</h3>
                      <div style={{ paddingBottom: '5%' }}>
                        <InputField
                          type="text"
                          name="username"
                          placeholder={translation.Placeholders.username}
                          value={this.state.username}
                          onChange={this.onChange}
                          error={handleErrorMessage(
                            error,
                            'username',
                            this.state.errors.username
                          )}
                        />
                      </div>

                      <div style={{ paddingBottom: '10%' }}>
                        <InputField
                          type="password"
                          name="password"
                          placeholder={translation.Placeholders.password}
                          value={this.state.password}
                          onChange={this.onChange}
                          error={handleErrorMessage(
                            error,
                            'password',
                            this.state.errors.password
                          )}
                        />
                      </div>
                      <button
                        className="btn btn-primary shadow-2 mb-4"
                        type="submit"
                      >
                        {translation.Login}
                      </button>
                      <br />

                      {error && (
                        <div style={errorStyle}>{serverError.message}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  login,
  deleteErrors,
})(withTranslations(Login, 'Login'));
