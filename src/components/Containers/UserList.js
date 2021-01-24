import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  deleteErrorUser,
  findAllNotDeletedUsers,
} from '../../actions/user';
import UserTable from '../User/UserTable';
import withTranslations from '../../utils/HighOrderComponent';
import ErrorHandler from '../Reusable/ErrorHandler';
import LoadingIndicator from '../Reusable/LoadingIndicator';

class UserList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.findAllNotDeletedUsers();
  }

  isModalOpened = (show) => {
    return show;
  };

  render() {
    const { userList } = this.props.user || [];
    const { loading, error } = this.props.user || {};

    const userListIsDeletedFalse =
      userList && userList.filter((user) => user.deleted === false);

    const { isLoadingNeeded } = this.props;

    if (isLoadingNeeded) {
      return <LoadingIndicator />;
    }

    return (
      <div className="backgroundColour">
        <ErrorHandler error={error} deleteError={this.props.deleteErrorUser} />
        <div className="d-flex align-items-baseline">
          <div className="container">
            <div>
              <UserTable
                userList={userListIsDeletedFalse}
                createUser={this.props.createUser}
                updateUser={this.props.updateUser}
                deleteUser={this.props.deleteUser}
                findAllNotDeletedUsers={this.props.findAllNotDeletedUsers}
                error={error}
                deleteError={this.props.deleteErrorUser}
                isModalOpened={this.isModalOpened}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLoadingNeeded: state.user.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    findAllUsers: () => {
      dispatch(findAllUsers());
    },
    createUser: (user, callback) => {
      dispatch(createUser(user, callback));
    },
    updateUser: (user, callback) => {
      dispatch(updateUser(user, callback));
    },
    deleteUser: (id) => {
      dispatch(deleteUser(id));
    },
    deleteErrorUser: () => {
      dispatch(deleteErrorUser());
    },
    findAllNotDeletedUsers: () => {
      dispatch(findAllNotDeletedUsers());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(UserList, 'UserList'));
