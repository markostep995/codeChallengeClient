import { MessageList } from 'react-chat-elements';
import React from 'react';
import 'react-chat-elements/dist/main.css';
import moment from 'moment';
import { adjustTimezoneDifference1 } from '../../utils';

export default class MessageListComponent extends React.Component {
  render() {
    const messageList = this.props.messageList.map((message) => ({
      position: this.props.loggedUser.id == message.user.id ? 'right' : 'left',
      type: 'text',
      text: message.user.username + ' ~ ' + message.messageText,
      date: new Date(adjustTimezoneDifference1(message.createdAt)),
    }));

    return (
      <>
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={messageList}
        />
      </>
    );
  }
}
