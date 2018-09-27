import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import bind from 'lodash-decorators/bind';

import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';

// import i18n from '../../utils/i18n';

// import './Landing.scss';

import getComponents from '../../get-components';

const {
  ModuleLink,
} = getComponents();

@contextModules()
// @connect(
//   (globalState) => ({
//   }),
// )
export default class Landing extends PureComponent {
  static propTypes = {
    // ======================================================
    // @contextModules
    // ======================================================
    moduleToRoutePrefixMap: PropTypes.object,
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
      moduleToRoutePrefixMap,
    } = this.props;

    return (
      <div className="Landing">
        Landing

        <div>
          {
            Object.keys(moduleToRoutePrefixMap).map((moduleName) => (
              <div key={ moduleName }>
                <ModuleLink
                  moduleName={ moduleName }
                >
                  { moduleName }
                </ModuleLink>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
