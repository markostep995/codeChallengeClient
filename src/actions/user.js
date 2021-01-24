import apiService from '../utils/serviceApi';

import {
  ADD_USER,
  ADD_USER_START,
  ADD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_START,
  UPDATE_USER_ERROR,
  GET_USER,
  GET_USER_START,
  GET_USER_ERROR,
  GET_USER_LIST,
  GET_USER_LIST_START,
  GET_USER_LIST_ERROR,
  DELETE_USER,
  DELETE_USER_START,
  DELETE_USER_ERROR,
  DEACTIVATE_USER,
  DEACTIVATE_USER_START,
  DEACTIVATE_USER_ERROR,
  ACTIVATE_USER,
  ACTIVATE_USER_START,
  ACTIVATE_USER_ERROR,
  GET_NOT_DELETED_USER_LIST,
  GET_NOT_DELETED_USER_LIST_START,
  GET_NOT_DELETED_USER_LIST_ERROR,
  CLEAR_ERROR_USER,
} from './types';

import {
  userAddPath,
  userUpdatePath,
  userFindByIdPath,
  userFindAllPath,
  userDeletePath,
  userDeactivatePath,
  userActivatePath,
  userFindAllNotDeletedPath,
} from '../constants/apiEndpoints';

const clearError = () => {
  return {
    type: CLEAR_ERROR_USER,
  };
};

const addUserStart = () => {
  return {
    type: ADD_USER_START,
  };
};
const addUserSuccessfully = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
const addUserUnsuccessfully = (err) => {
  return {
    type: ADD_USER_ERROR,
    payload: err,
  };
};

const updateUserStart = () => {
  return {
    type: UPDATE_USER_START,
  };
};
const updateUserSuccessfully = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};
const updateUserUnsuccessfully = (err) => {
  return {
    type: UPDATE_USER_ERROR,
    payload: err,
  };
};

const getUserStart = () => {
  return {
    type: GET_USER_START,
  };
};
const getUserSuccessfully = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
const getUserUnsuccessfully = (err) => {
  return {
    type: GET_USER_ERROR,
    payload: err,
  };
};

const getUserListStart = () => {
  return {
    type: GET_USER_LIST_START,
  };
};

const getUserListSuccessfully = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

const getUserListUnsuccessfully = (err) => {
  return {
    type: GET_USER_LIST_ERROR,
    payload: err,
  };
};

const deleteUserStart = () => {
  return {
    type: DELETE_USER_START,
  };
};
const deleteUserSuccessfully = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
const deleteUserUnsuccessfully = (err) => {
  return {
    type: DELETE_USER_ERROR,
    payload: err,
  };
};

const deactivateUserStart = () => {
  return {
    type: DEACTIVATE_USER_START,
  };
};
const deactivateUserSuccessfully = (data) => {
  return {
    type: DEACTIVATE_USER,
    payload: data,
  };
};
const deactivateUserUnsuccessfully = (err) => {
  return {
    type: DEACTIVATE_USER_ERROR,
    payload: err,
  };
};

const activateUserStart = () => {
  return {
    type: ACTIVATE_USER_START,
  };
};
const activateUserSuccessfully = (data) => {
  return {
    type: ACTIVATE_USER,
    payload: data,
  };
};
const activateUserUnsuccessfully = (err) => {
  return {
    type: ACTIVATE_USER_ERROR,
    payload: err,
  };
};

const getNotDeletedUserListStart = () => {
  return {
    type: GET_NOT_DELETED_USER_LIST_START,
  };
};

const getNotDeletedUserListSuccessfully = (data) => {
  return {
    type: GET_NOT_DELETED_USER_LIST,
    payload: data,
  };
};

const getNotDeletedUserListUnsuccessfully = (err) => {
  return {
    type: GET_NOT_DELETED_USER_LIST_ERROR,
    payload: err,
  };
};

export const deleteErrorUser = () => {
  return (dispatch) => {
    dispatch(clearError());
  };
};

export const createUser = (user, callback) => {
  return (dispatch) => {
    dispatch(addUserStart());
    return apiService
      .post(userAddPath(), user)
      .then((response) => {
        dispatch(addUserSuccessfully(response.data));
        callback();
      })
      .catch((err) => {
        dispatch(addUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const updateUser = (user, callback) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    return apiService
      .post(userUpdatePath(), user)
      .then((response) => {
        dispatch(updateUserSuccessfully(response.data));
        callback();
      })
      .catch((err) => {
        dispatch(updateUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const findUserById = (id) => {
  return (dispatch) => {
    dispatch(getUserStart());
    return apiService
      .get(userFindByIdPath(id))
      .then((response) => {
        dispatch(getUserSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(getUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAllUsers = () => {
  return (dispatch) => {
    dispatch(getUserListStart());
    return apiService
      .get(userFindAllPath())
      .then((response) => {
        dispatch(getUserListSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(getUserListUnsuccessfully(err?.response?.data));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(deleteUserStart());
    return apiService
      .patch(userDeletePath(id))
      .then(() => {
        dispatch(deleteUserSuccessfully(id));
      })
      .catch((err) => {
        dispatch(deleteUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const deactivateUser = (id) => {
  return (dispatch) => {
    dispatch(deactivateUserStart());
    return apiService
      .patch(userDeactivatePath(id))
      .then((response) => {
        dispatch(deactivateUserSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(deactivateUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const activateUser = (id) => {
  return (dispatch) => {
    dispatch(activateUserStart());
    return apiService
      .patch(userActivatePath(id))
      .then((response) => {
        dispatch(activateUserSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(activateUserUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAllNotDeletedUsers = () => {
  return (dispatch) => {
    dispatch(getNotDeletedUserListStart());
    return apiService
      .get(userFindAllNotDeletedPath())
      .then((response) => {
        dispatch(getNotDeletedUserListSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(getNotDeletedUserListUnsuccessfully(err?.response?.data));
      });
  };
};
