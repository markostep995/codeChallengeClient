import axios from 'axios';

const handleErrors = (error) => {
  const { response } = error || {};
  const { status } = response || {};

  if (status === 401) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  } else {
    throw error;
  }
};

export default {
  get(url) {
    return axios.get(url, {
      headers: getSimpleHeaders(),
    }).catch(handleErrors);
  },

  post(url, body) {
    return axios.post(url, body, {
      headers: getSimpleHeaders(),
    }).catch(handleErrors);
  },

  put(url, body, cancelToken) {
    return axios.put(url, body, {
      headers: getSimpleHeaders(),
    }).catch(handleErrors);
  },

  delete(url, cancelToken) {
    return axios.delete(url, {
      headers: getSimpleHeaders(),
    }).catch(handleErrors);
  },

  patch(url, body, cancelToken) {
    return axios.patch(url, body, {
      headers: getSimpleHeaders(),
    }).catch(handleErrors);
  },
  getFromXml(url) {
    return axios.get(url, {
      headers: getXmlHeaders(),
    }).catch(handleErrors);
  },

  getFromFile(url) {
    return axios.get(url, {
      responseType: "blob",
    }).catch(handleErrors);
  },
};

// function getSimpleHeaders() {
//   return {
//     'Content-Type' : 'application/json',
//     'Authorization': `Token ${tokenUtils.getToken('auth_token')}`
//   }
// }

function getSimpleHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

function getXmlHeaders() {
  return {
    'Content-Type': 'application/xml; charset=utf-8',
  };
}
