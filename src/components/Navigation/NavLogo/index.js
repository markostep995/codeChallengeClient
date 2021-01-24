import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const navLogo = (props) => {
  let toggleClass = ['mobile-menu'];

  if (props.collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  return (
    <Fragment>
      <div className="navbar-brand header-logo">
        <Link to="/dashboard">
          <a href="#!" className="b-brand">
            <div className="b-bg">
              <i className="feather icon-trending-up" />
            </div>

            <span className="b-title">TX Code Challenge</span>
          </a>
        </Link>
        <a
          href="#!"
          className={toggleClass.join(' ')}
          id="mobile-collapse"
          onClick={props.onToggleNavigation}
        >
          <span />
        </a>
      </div>
    </Fragment>
  );
};

export default navLogo;
