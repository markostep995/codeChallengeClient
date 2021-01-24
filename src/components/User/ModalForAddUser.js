import React from 'react';
import Modal from 'react-bootstrap/Modal';
import InputField from '../Reusable/InputField';
import ButtonSave from '../Reusable/ButtonSave';
import withTranslations from '../../utils/HighOrderComponent';
import ErrorHandler from '../Reusable/ErrorHandler';
import { handleErrorMessage } from '../../utils';

class ModalForAddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',

      errors: {},
    };
  }

  handleClose = () => {
    this.props.handleClose();
  };
  handleComboBoxChange = (object, objectId) => {
    return (e) => {
      this.setState({ [object]: { [objectId]: e.target.value } });
    };
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

    if (this.handleClientValidation() === true) {
      return;
    }

    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.handleAdd(newUser);
  };

  render() {
    const { deleteError, error } = this.props;

    const placeholder = this.props.t.Placeholders;

    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Body>
            <ErrorHandler error={error} deleteError={deleteError} />
            <h5 className="title">{this.props.t.Labels.title}</h5>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <InputField
                  name="username"
                  placeholder={placeholder.username}
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
                  placeholder={placeholder.password}
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
                  placeholder={placeholder.confirmPassword}
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
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

export default withTranslations(ModalForAddUser, 'ModalForAddUser');
