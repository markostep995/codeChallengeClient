import moment from 'moment';
import {
  BACKEND_MOMENT_DATE_FORMAT,
  FRONTEND_MOMENT_DATE_FORMAT,
  BACKEND_MOMENT_DATE_FORMAT1,
  FRONTEND_MOMENT_DATE_FORMAT1,
} from './constants';

export const formatDateFromBackend = (date) =>
  moment(date, BACKEND_MOMENT_DATE_FORMAT).format(FRONTEND_MOMENT_DATE_FORMAT);

export const dateFromBackendToJsDate = (date) => {
  const momentDate = moment(date, BACKEND_MOMENT_DATE_FORMAT);
  return momentDate.isValid() ? momentDate.toDate() : null;
};

export const adjustTimezoneDifference = (date) => {
  const wrapper = moment.utc(date).local();
  const adjusted = new Date(wrapper.format(BACKEND_MOMENT_DATE_FORMAT));
  return adjusted;
};

export const formatDateFromBackend1 = (date) =>
  moment(date, BACKEND_MOMENT_DATE_FORMAT1).format(
    FRONTEND_MOMENT_DATE_FORMAT1
  );

export const dateFromBackendToJsDate1 = (date) => {
  const momentDate = moment(date, BACKEND_MOMENT_DATE_FORMAT1);
  return momentDate.isValid() ? momentDate.toDate() : null;
};

export const adjustTimezoneDifference1 = (date) => {
  const wrapper = moment.utc(date).local();
  const adjusted = new Date(wrapper.format(BACKEND_MOMENT_DATE_FORMAT1));
  return adjusted;
};

export const getDateTime = () => {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  if (hour.toString().length == 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    second = '0' + second;
  }
  var dateTime =
    day + '.' + month + '.' + year + ' ' + hour + ':' + minute + ':' + second;
  return dateTime;
};

export const setMessage = (msg, tagId, msgId) => async (dispatch) => {
  console.log(tagId);
  document.querySelector(tagId).classList.add('alert-danger');
  document.querySelector(msgId).style.color = 'red';
  document.querySelector(msgId).innerHTML = '<h5>' + msg + '</h5>';
};

export const getUpdateValueItem = (list, id) => {
  return list.find((item) => item.id === id);
};

export const formatDate = (date) => {
  return moment(date).format('DD.MM.YYYY.');
};

export const formatDateWithTime = (date) => {
  return moment(date).format('DD.MM.YYYY. HH:mm:ss');
};

export const formatDateWithTime2 = (date) => {
  return moment(date).format('DD.MMM.YYYY. HH:mm:ss');
};

export const handleErrorMessage = (
  error,
  serverValidationMessage,
  clientValidationMessage
) => {
  return error
    ? error[serverValidationMessage]
    : clientValidationMessage !== ''
    ? clientValidationMessage
    : '';
};
