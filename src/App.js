import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import '../node_modules/@syncfusion/ej2-base/styles/material.css';
// import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
// import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
// import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
// import '../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { logout } from './actions/securityActions';
import { SET_CURRENT_USER } from './actions/types';
import setJWTToken from './securityUtils/setJWTToken';
import SecuredRoute from './securityUtils/secureRoute';
import authorizationService from './securityUtils/authorizationService';
import Navigation from './components/Navigation';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import './styles/style.scss';
import UserList from './components/Containers/UserList';
import MessageList from './components/Containers/MessageList';
var jwtDecode = require('jwt-decode');

const jwtToken = localStorage.getItem('jwtToken');

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwtDecode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = '/';
  }
}
authorizationService.startRefresh();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <NavBar />
        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <Breadcrumb />
                <div className="main-body">
                  <div className="page-wrapper">
                    <Switch>
                      <SecuredRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                      />

                      <SecuredRoute
                        exact
                        path="/userList"
                        component={UserList}
                      />

                      <SecuredRoute
                        exact
                        path="/messageList"
                        component={MessageList}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
