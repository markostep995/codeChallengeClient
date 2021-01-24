import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

const cleanErrors = (state) => {
  return {
    errors: undefined
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    case CLEAR_ERRORS:
      return cleanErrors(state);

    default:
      return state;
  }
}
