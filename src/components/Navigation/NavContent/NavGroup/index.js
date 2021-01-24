import React, { Fragment } from 'react';
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';

const navGroup = (props) => {
  let navItems = '';
  if (props.group.children) {
    const groups = props.group.children;
    navItems = Object.keys(groups).map((item) => {
      item = groups[item];
      switch (item.type) {
        case 'collapse':
          return <NavCollapse key={item.id} collapse={item} type="main" />;
        case 'item':
          return <NavItem layout={props.layout} key={item.id} item={item} />;
        default:
          return false;
      }
    });
  }

  return (
    <Fragment>
      <li key={props.group.id} className="nav-item pcoded-menu-caption">
        <label>{props.group.title}</label>
      </li>
      {navItems}
    </Fragment>
  );
};

export default navGroup;
