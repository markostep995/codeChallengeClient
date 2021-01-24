import axios from 'axios';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERROR_USER,
  CLEAR_ERRORS,
} from './types';

import setJWTToken from '../securityUtils/setJWTToken';
var jwtDecode = require('jwt-decode');

const clearError = () => {
  return {
    type: CLEAR_ERROR_USER,
  };
};

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};


export const login = (LoginRequest, history) => async (dispatch) => {
  try {
    const res = await axios.post('/api/user/login', LoginRequest);
    const decoded = setTokensAndDecodeToken(res.data);
    
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });

    history.push('/messageList');
    dispatch({
      type: CLEAR_ERRORS,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err?.response?.data,
    });
  }
};

export const setTokensAndDecodeToken = (res) => {
  const { token, refreshToken } = res;
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('refreshToken', refreshToken);
  setJWTToken(token);
  const decoded = jwtDecode(token);
  return decoded;
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('google2faToken');
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};

export const deleteErrorUser = () => {
  return (dispatch) => {
    dispatch(clearError());
  };
};

export const deleteErrors = () => {
  return (dispatch) => {
    dispatch(clearErrors());
  };
};
