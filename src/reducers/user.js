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
  CLEAR_ERROR_USER,
} from '../actions/types';

const clearError = (state) => {
  return {
    ...state,
    error: undefined,
  };
};

const initialState = {
  userList: [],
  user: {},
  loading: false,
  error: undefined,
};

const addUserStart = (state) => {
  return {
    ...state,
  };
};

const addUser = (state, action) => {
  return {
    ...state,
    loading: false,
    userList: state.userList.concat(action.payload),
  };
};

const addUserError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const updateUserStart = (state) => {
  return {
    ...state,
  };
};

const updateUser = (state, action) => {
  return {
    ...state,
    userList: state.userList.map((user) =>
      user.id === action.payload.id ? action.payload : user
    ),
    loading: false,
  };
};

const updateUserError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const findAllUsersStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const findAllUsers = (state, action) => {
  return {
    ...state,
    loading: false,
    userList: action.payload,
  };
};

const findAllUsersError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const findUserByIdStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const findUserById = (state, action) => {
  return {
    ...state,
    loading: false,
    user: action.payload,
  };
};

const findUserByIdError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const deleteUserStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const deleteUser = (state, action) => {
  return {
    ...state,
    loading: false,
    userList: state.userList.filter((user) => user.id !== action.payload),
  };
};

const deleteUserError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const deactivateUserStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const deactivateUser = (state, action) => {
  return {
    ...state,
    userList: state.userList.map((user) =>
      user.id === action.payload.id ? action.payload : user
    ),
    loading: false,
  };
};

const deactivateUserError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

const activateUserStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const activateUser = (state, action) => {
  return {
    ...state,
    userList: state.userList.map((user) =>
      user.id === action.payload.id ? action.payload : user
    ),
    loading: false,
  };
};

const activateUserError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case ADD_USER_START:
      return addUserStart(state);
    case ADD_USER_ERROR:
      return addUserError(state, action);

    case UPDATE_USER:
      return updateUser(state, action);
    case UPDATE_USER_START:
      return updateUserStart(state);
    case UPDATE_USER_ERROR:
      return updateUserError(state, action);

    case GET_USER:
      return findUserById(state, action);
    case GET_USER_START:
      return findUserByIdStart(state);
    case GET_USER_ERROR:
      return findUserByIdError(state, action);

    case GET_USER_LIST:
      return findAllUsers(state, action);
    case GET_USER_LIST_START:
      return findAllUsersStart(state);
    case GET_USER_LIST_ERROR:
      return findAllUsersError(state, action);

    case DELETE_USER:
      return deleteUser(state, action);
    case DELETE_USER_START:
      return deleteUserStart(state);
    case DELETE_USER_ERROR:
      return deleteUserError(state, action);

    case DEACTIVATE_USER:
      return deactivateUser(state, action);
    case DEACTIVATE_USER_START:
      return deactivateUserStart(state);
    case DEACTIVATE_USER_ERROR:
      return deactivateUserError(state, action);

    case ACTIVATE_USER:
      return activateUser(state, action);
    case ACTIVATE_USER_START:
      return activateUserStart(state);
    case ACTIVATE_USER_ERROR:
      return activateUserError(state, action);

    case CLEAR_ERROR_USER:
      return clearError(state);

    default:
      return state;
  }
}
