import { SET_CURRENT_USER, CLEAR_ERROR_USER } from '../actions/types';

const initialState = {
  loggedUser: {},
  validToken: false,
  loading: false,
  error: undefined,
  qrCode: '',
};

const booleanActionPayload = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

const clearError = (state) => {
  return {
    ...state,
    error: undefined,
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        loggedUser: action.payload,
      };

    case CLEAR_ERROR_USER:
      return clearError(state);

    default:
      return state;
  }
}
