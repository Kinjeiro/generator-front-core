import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';

// import i18n from '../../utils/i18n';

// import './Landing.scss';

@connect(
  (globalState) => ({
  }),
)
export default class Landing extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  // componentDidMount() {
  // }
  // componentWillReceiveProps(newProps) {
  // }


  // ======================================================
  // HANDLERS
  // ======================================================
  // @bind()

  // ======================================================
  // RENDERS
  // ======================================================


  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {

    } = this.props;

    return (
      <div className="Landing">
        Landing
      </div>
    );
  }
}
