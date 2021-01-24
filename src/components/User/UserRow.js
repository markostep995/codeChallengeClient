import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withTranslations from '../../utils/HighOrderComponent';
import { confirmDialog } from '../Reusable/ConfirmDialog';
import ModalForUpdateUser from './ModalForUpdateUser';
import Tooltip from '@material-ui/core/Tooltip';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
    };
  }

  showModalUpdate = () => {
    this.setState({
      showUpdate: true,
    });
  };

  handleEdit = (user) => {
    this.props.updateUser(user, this.handlePreviewClose);
  };

  handlePreviewClose = () => {
    this.setState({ showUpdate: false });
    this.props.deleteError();
  };

  onDeleteClick = (id) => {
    const action = () => {
      this.props.deleteUser(id);
    };
    confirmDialog('delete selected user', action, ', delete!');
  };

  activateDeactivateUser = (id, onClick, title, iconClassName) => {
    return (
      <td className="text-center">
        <Link id={id} onClick={onClick}>
          <Tooltip title={title} placement="top" arrow = { true }>
            <i className={iconClassName} />
          </Tooltip>
        </Link>
      </td>
    );
  };

  render() {
    const { user, error } = this.props || {};

    let row = (
      <tr>
        <td>{this.props.index}</td>
        <td>{user.username}</td>

        <td className="text-center" id="centerRow">
          <Link
            onClick={(e) => {
              this.showModalUpdate();
            }}
          >
            <i className="fas fa-edit fa-2x" />
          </Link>
        </td>

        <td className="text-center">
          <Link id="deleteUser" onClick={() => this.onDeleteClick(user.id)}>
            <i className="fas fa-trash-alt fa-2x" />
          </Link>
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        {this.state.showUpdate && (
          <ModalForUpdateUser
            show={this.state.showUpdate}
            user={user}
            handleEdit={this.handleEdit}
            handleClose={this.handlePreviewClose}
            error={error}
            deleteError={this.props.deleteError}
          />
        )}
      </Fragment>
    );
  }
}

export default withTranslations(UserRow, 'UserRow');
