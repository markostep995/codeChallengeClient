import React, { Component, Fragment } from 'react';
import UserRow from './UserRow';
import { Row, Col, Card, Table } from 'react-bootstrap';
import SearchFilter from '../Reusable/SearchFilter';
import ModalForAddUser from './ModalForAddUser';
import { Link } from 'react-router-dom';
import withTranslations from '../../utils/HighOrderComponent';
import { Tooltip } from '@material-ui/core';

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showModal = (e) => {
    this.setState({
      show: true,
    });
  };

  handlePreviewClose = () => {
    this.setState({ show: false });
    this.props.deleteError();
  };

  handleAdd = (user) => {
    this.props.createUser(user, this.handlePreviewClose);
  };

  isModalOpened = () => {
    this.props.isModalOpened(this.state.show);
  };

  render() {
    var userList = this.props.userList.map((user, index) => (
      <UserRow
        index={index + 1}
        key={user.id}
        user={user}
        updateUser={this.props.updateUser}
        deleteUser={this.props.deleteUser}
        error={this.props.error}
        deleteError={this.props.deleteError}
      />
    ));

    const translate = this.props.t || {};

    let table = (
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row>
                <Col className="col-md-8">
                  <Card.Title as="h3">{translate.titleTable}</Card.Title>
                </Col>
                <Col className="col-md-3">
                  <SearchFilter noSearchColums={2} />
                </Col>
                <Col className="addUser col-md-1">
                  <Tooltip
                    title={translate.Tooltips.addUser}
                    placement="top"
                    arrow={true}
                  >
                    <Link id="addUser" onClick={() => this.showModal()}>
                      <i className="fas fa-plus fa-2x" />
                    </Link>
                  </Tooltip>
                </Col>
              </Row>
            </Card.Header>
            <Table responsive hover id="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{translate.HeaderColumns.username}</th>
                  <th className="text-center">
                    {translate.HeaderColumns.edit}
                  </th>
                  <th className="text-center">
                    {translate.HeaderColumns.delete}
                  </th>
                </tr>
              </thead>
              <tbody>{userList}</tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddUser
            handleAdd={this.handleAdd}
            handleClose={this.handlePreviewClose}
            show={this.state.show}
            error={this.props.error}
            deleteError={this.props.deleteError}
          />
        )}
      </Fragment>
    );
  }
}

export default withTranslations(UserTable, 'UserTable');
