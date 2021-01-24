import React, { Component } from 'react';
import { Col, Tab, Row, Card, Nav } from 'react-bootstrap';
import { CardActionArea } from '@material-ui/core';
import { connect } from 'react-redux';
import LoadingIndicator from '../Reusable/LoadingIndicator';
import withTranslations from '../../utils/HighOrderComponent';

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { isLoadingNeeded } = this.props;

    if (isLoadingNeeded) {
      return <LoadingIndicator />;
    }

    return <p> Text... </p>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(Dashboard, 'Dashboard'));
