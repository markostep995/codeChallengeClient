import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createMessage,
  findAllMessagesOrderByDateCreated,
  deleteErrorMessage,
} from '../../actions/message';
import withTranslations from '../../utils/HighOrderComponent';
import ErrorHandler from '../Reusable/ErrorHandler';
import LoadingIndicator from '../Reusable/LoadingIndicator';
import MessageListComponent from '../Message/MessageListComponent';
import { Row, Col, Card, Table } from 'react-bootstrap';
import InputField from '../Reusable/InputField';
import { handleErrorMessage } from '../../utils';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

class MessageList extends Component {
  constructor() {
    super();
    this.state = {
      messageText: '',

      errors: {},
    };
  }
  
  componentDidMount() {
    this.props.findAllMessagesOrderByDateCreated();
  }

  // componentDidMount() {
  //   this.props.findAllMessagesOrderByDateCreated();
  //   this.interval = setInterval(
  //     () => this.props.findAllMessagesOrderByDateCreated(),
  //     5000
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClientValidation = () => {
    let hasError = false;

    let errors = {};

    if (!this.state.messageText) {
      errors['messageText'] = this.props.t.Errors.messageText;
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

    const { loggedUser } = this.props.loggedUser || {};

    const newMessage = {
      messageText: this.state.messageText,
      user: { id: loggedUser.id },
    };

    this.props.createMessage(newMessage);
    this.setState({ messageText: '' });
  };

  render() {
    const { messageList } = this.props.message || [];
    const { loading, error } = this.props.message || {};
    const { loggedUser } = this.props.loggedUser || {};
    const translate = this.props.t;

    if (loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="backgroundColour">
        <ErrorHandler
          error={error}
          deleteError={this.props.deleteErrorMessage}
        />
        <div className="d-flex align-items-baseline">
          <div className="container col-md-8 text-center">
            <div>
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <Card.Title as="h3">
                        <b>{translate.chatTitle}</b>
                      </Card.Title>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Header>
                  <Row>
                    <Col>
                      <Card.Title as="h3">
                        <Row>
                          <Col className="col-md-11">
                            <InputField
                              name="messageText"
                              placeholder={translate.typeMessage}
                              onChange={this.onChange}
                              value={this.state.messageText}
                              multiline={true}
                              rows={2}
                              error={handleErrorMessage(
                                error,
                                'messageText',
                                this.state.errors.messageText
                              )}
                            />
                          </Col>
                          <Col className="col-md-1">
                            <div>
                              <div style={{ paddingTop: 15 }}>
                                <Link onClick={this.handleSubmit}>
                                  <Tooltip
                                    title={translate.Tooltips.sendMessage}
                                    placement="top"
                                    arrow="true"
                                  >
                                    <i
                                      className="fas fa-paper-plane"
                                      style={{
                                        cursor: 'pointer',
                                        color: 'green',
                                      }}
                                    ></i>
                                  </Tooltip>
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Title>
                    </Col>
                  </Row>
                </Card.Header>

                <MessageListComponent
                  messageList={messageList}
                  loggedUser={loggedUser}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
  isLoadingNeeded: state.message.loading,
  loggedUser: state.loggedUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    findAllMessagesOrderByDateCreated: () => {
      dispatch(findAllMessagesOrderByDateCreated());
    },
    createMessage: (message, callback) => {
      dispatch(createMessage(message, callback));
    },
    deleteErrorMessage: () => {
      dispatch(deleteErrorMessage());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(MessageList, 'MessageList'));
