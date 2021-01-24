import apiService from '../utils/serviceApi';

import {
  ADD_MESSAGE,
  ADD_MESSAGE_START,
  ADD_MESSAGE_ERROR,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_START,
  GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_ERROR,
  CLEAR_ERROR_MESSAGE,
} from './types';

import {
  messageAddPath,
  messageFindAllOrderByDateCreatedPath,
} from '../constants/apiEndpoints';

const clearError = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};

const addMessageStart = () => {
  return {
    type: ADD_MESSAGE_START,
  };
};
const addMessageSuccessfully = (data) => {
  return {
    type: ADD_MESSAGE,
    payload: data,
  };
};
const addMessageUnsuccessfully = (err) => {
  return {
    type: ADD_MESSAGE_ERROR,
    payload: err,
  };
};

const getMessagesOrederByDateCreatedStart = () => {
  return {
    type: GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_START,
  };
};

const getMessagesOrederByDateCreatedSuccessfully = (data) => {
  return {
    type: GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED,
    payload: data,
  };
};

const getMessagesOrederByDateCreatedUnsuccessfully = (err) => {
  return {
    type: GET_MESSAGE_LIST_ORDER_BY_DATE_CREATED_ERROR,
    payload: err,
  };
};

export const deleteErrorMessage = () => {
  return (dispatch) => {
    dispatch(clearError());
  };
};

export const createMessage = (message, callback) => {
  return (dispatch) => {
    dispatch(addMessageStart());
    return apiService
      .post(messageAddPath(), message)
      .then((response) => {
        dispatch(addMessageSuccessfully(response.data));
        callback();
      })
      .catch((err) => {
        dispatch(addMessageUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAllMessagesOrderByDateCreated = () => {
  return (dispatch) => {
    dispatch(getMessagesOrederByDateCreatedStart());
    return apiService
      .get(messageFindAllOrderByDateCreatedPath())
      .then((response) => {
        dispatch(getMessagesOrederByDateCreatedSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(
          getMessagesOrederByDateCreatedUnsuccessfully(err?.response?.data)
        );
      });
  };
};
