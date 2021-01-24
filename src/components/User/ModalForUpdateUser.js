import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputField from '../Reusable/InputField';
import ButtonSave from '../Reusable/ButtonSave';
import withTranslations from '../../utils/HighOrderComponent';
import ErrorHandler from '../Reusable/ErrorHandler';
import { handleErrorMessage } from '../../utils';

class ModalForUpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      lastLoginDate: '',

      errors: {},
    };
  }

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      ...user,
      confirmPassword: user.password,
    });
  }

  handleClose = () => {
    this.props.handleClose();
  };

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

    if (!this.state.confirmPassword) {
      errors['confirmPassword'] = this.props.t.Errors.confirmPassword;
      hasError = true;
    }

    this.setState({ errors });
    return hasError;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleClientValidation() == true) {
      return;
    }

    const updatedUser = {
      id: this.props.user.id,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      lastLoginDate: this.state.lastLoginDate,
      isActive: this.state.isActive,
    };

    this.props.handleEdit(updatedUser);
  };

  render() {
    const { error, deleteError } = this.props;

    console.log(this.state);

    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Body>
            <ErrorHandler error={error} deleteError={deleteError} />
            <div className="text-center">
              <h4 className="projectDetailsTitle">
                {this.props.t.Labels.title}
              </h4>
              <hr />
            </div>
            <div className="panel-heading" />
            <br />
            <div className="form-group">
              <InputField
                name="username"
                placeholder={this.props.t.Placeholders.username}
                onChange={this.onChange}
                value={this.state.username}
                error={handleErrorMessage(
                  error,
                  'username',
                  this.state.errors.username
                )}
              />
            </div>
            <div className="form-group">
              <InputField
                name="password"
                placeholder={this.props.t.Placeholders.password}
                onChange={this.onChange}
                value={this.state.password}
                autoComplete="off"
                type="password"
                error={handleErrorMessage(
                  error,
                  'password',
                  this.state.errors.password
                )}
              />
            </div>
            <div className="form-group">
              <InputField
                name="confirmPassword"
                placeholder={this.props.t.Placeholders.confirmPassword}
                onChange={this.onChange}
                value={this.state.confirmPassword}
                autoComplete="off"
                type="password"
                error={handleErrorMessage(
                  error,
                  'confirmPassword',
                  this.state.errors.confirmPassword
                )}
              />
            </div>

            <div className="row">
              <ButtonSave onClick={this.handleSubmit} />
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

export default withTranslations(ModalForUpdateUser, 'ModalForUpdateUser');
