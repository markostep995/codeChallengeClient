import {
  ADD_MESSAGE,
  ADD_MESSAGE_START,
  ADD_MESSAGE_ERROR,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_START,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_ERROR,
  CLEAR_ERROR_MESSAGE,
} from '../actions/types';

const clearError = (state) => {
  return {
    ...state,
    error: undefined,
  };
};

const initialState = {
  messageList: [],
  message: {},
  loading: false,
  error: undefined,
};

const addMessageStart = (state) => {
  return {
    ...state,
  };
};

const addMessage = (state, action) => {
  return {
    ...state,
    loading: false,
    messageList: action.payload,
  };
};

const addMessageError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const findAllMessagesOrderByDateCreatedStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const findAllMessagesOrderByDateCreated = (state, action) => {
  return {
    ...state,
    loading: false,
    messageList: action.payload,
  };
};

const findAllMessagesOrderByDateCreatedError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action);
    case ADD_MESSAGE_START:
      return addMessageStart(state);
    case ADD_MESSAGE_ERROR:
      return addMessageError(state, action);

    case GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED:
      return findAllMessagesOrderByDateCreated(state, action);
    case GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_START:
      return findAllMessagesOrderByDateCreatedStart(state);
    case GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_ERROR:
      return findAllMessagesOrderByDateCreatedError(state, action);

    case CLEAR_ERROR_MESSAGE:
      return clearError(state);

    default:
      return state;
  }
}
