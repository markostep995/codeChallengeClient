import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import navigation from '../../constants/menu-items';

const config = {
  defaultPath: '',
  basename: '', // only at build time to set, like /datta-able
  layout: 'vertical', // vertical, horizontal (not available in lite version)
  preLayout: null, // (not available in lite version)
  collapseMenu: false, // mini-menu
  layoutType: 'menu-light', // menu-dark, (menu-light, dark are not available in lite version)
  navIconColor: false,
  headerBackColor: 'header-default', // header-default, (header-blue, header-red, header-purple, header-lightblue, header-dark are not available in lite version)
  navBackColor: 'navbar-default', // navbar-default, (navbar-blue, navbar-red, navbar-purple, navbar-lightblue, navbar-dark are not available in lite version)
  navBrandColor: 'brand-default', // brand-default, (brand-blue, brand-red, brand-purple, brand-lightblue, brand-dark are not available in lite version)
  navBackImage: false, // not available in lite version
  rtlLayout: false, // not available in lite version
  navFixedLayout: true,
  headerFixedLayout: false, // not available in lite version
  boxLayout: false,
  navDropdownIcon: 'style1', // style1, (style2, style3 are not available in lite version)
  navListIcon: 'style1', // style1, (style2, style3, style4, style5, style6 are not available in lite version)
  navActiveListColor: 'active-default', // active-default, (active-blue, active-red, active-purple, active-lightblue, active-dark are not available in lite version)
  navListTitleColor: 'title-default', // title-default, (title-blue, title-red, title-purple, title-lightblue, title-dark are not available in lite version)
  navListTitleHide: false, // not available in lite version
  configBlock: false, // not available in lite version
  layout6Background:
    'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)', // used only for pre-layout = layout-6
  layout6BackSize: '', // used only for pre-layout = layout-6
};

class Breadcrumb extends Component {
  state = {
    main: [],
    item: [],
  };

  componentDidMount() {
    navigation.items.map((item, index) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item, this.props.location.pathname);
      }
      return false;
    });
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    this.setState({
      main: [],
      item: [],
    });
    navigation.items.map((item, index) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item, nextProps.location.pathname);
      }
      return false;
    });
  };

  getCollapse = (item, path) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          this.getCollapse(collapse, path);
        } else if (collapse.type && collapse.type === 'item') {
          if (path === config.basename + collapse.url) {
            this.setState({ item: collapse, main: item });
          }
        }
        return false;
      });
    }
  };

  render() {
    let main, item;
    let breadcrumb = '';
    let title = 'Welcome';

    if (this.state.main && this.state.main.type === 'collapse') {
      main = (
        <li className="breadcrumb-item">
          <a href="#!">{this.state.main.title}</a>
        </li>
      );
    }

    if (this.state.item && this.state.item.type === 'item') {
      title = this.state.item.title;
      item = (
        <li className="breadcrumb-item">
          <a href="#!">{title}</a>
        </li>
      );

      if (this.state.item.breadcrumbs !== false) {
        breadcrumb = (
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h5 className="m-b-10">{title}</h5>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fa fa-home" />
                      </Link>
                    </li>
                    {main}
                    {item}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return null; //<Fragment>{breadcrumb}</Fragment>;
  }
}

export default withRouter(Breadcrumb);
