import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';


// import i18n from '../../utils/i18n';

import {
  PATH_PARAM_<%=entityNameUpper%>_ID,
} from '../routes-paths-<%=moduleNameKebab%>';

// import './<%=moduleNameCapital%>Page.scss';

@connect(
  (globalState, props) => {
    const id = props.params[PATH_PARAM_<%=entityNameUpper%>_ID];
    return {
      id,
    };
  },
)
export default class <%=entityNameCapital%>Page extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
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
      id,
    } = this.props;

    return (
      <div className="<%=entityNameCapital%>Page">
        <&=entityNameCapital&>Page -- {id}
      </div>
    );
  }
}
