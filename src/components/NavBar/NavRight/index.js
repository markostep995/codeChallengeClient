import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/securityActions';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import withTranslations from '../../../utils/HighOrderComponent';
import Tooltip from '@material-ui/core/Tooltip';
import { Link, withRouter } from 'react-router-dom';

class NavRight extends Component {
  logout() {
    this.props.logout();
    window.location.href = '/';
  }

  goToPath = (path, style, tooltipTitle, iconClassName) => {
    return (
      <div style={style}>
        <Link to={path}>
          <Tooltip title={tooltipTitle} placement="top" arrow = { true }>
            <i className={iconClassName}></i>
          </Tooltip>
        </Link>
      </div>
    );
  };
  render() {
    const { loggedUser } = this.props;
    const tooltipText = this.props.t.Tooltips;

    const location = this.props.location || {};

    return (
      loggedUser.validToken && (
        <Fragment>
          <ul className="navbar-nav ml-auto">
            <li>
              <span>{loggedUser.loggedUser.username}</span>
            </li>
            <li>
              <Link
                to="/logout"
                className="dropdown-item"
                onClick={this.logout.bind(this)}
              >
                <Tooltip
                  title={tooltipText.logout}
                  placement="bottom"
                  arrow = { true }
                >
                  <PowerSettingsNewRoundedIcon className="logout-icon" />
                </Tooltip>
              </Link>
            </li>
          </ul>
        </Fragment>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser,
  };
};

export default withRouter(
  connect(mapStateToProps, { logout })(withTranslations(NavRight, 'NavRight'))
);
