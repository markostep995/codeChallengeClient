import axios from 'axios';
import setJWTToken from '../securityUtils/setJWTToken';
const REFRESH_INTERVAL = 10000;

const authorizationService = {
  isActionAllowed: (actionName, employeeAllowedActionsList) => {
    if (employeeAllowedActionsList.find((a) => a == actionName)) {
      return true;
    }
    return false;
  },
  startRefresh: () => {
    const intervalId = setInterval(async () => {
      const accessToken = localStorage.getItem('jwtToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        return;
      }

      const response = await axios.post('/api/user/refresh-token', {
        token: accessToken,
        refreshToken,
      });

      if (!response.data.success) {
        clearInterval(intervalId);
        logout();
        return;
      }

      localStorage.setItem('jwtToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setJWTToken(accessToken);
    }, REFRESH_INTERVAL);
  },
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('refreshToken');
};

export default authorizationService;
