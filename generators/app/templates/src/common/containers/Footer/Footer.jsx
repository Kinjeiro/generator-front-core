import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import bind from 'lodash-decorators/bind';

// import i18n from '../../utils/i18n';

import getComponents from '../../get-components';

const {
  ModuleLink,
} = getComponents();

require('./Footer.scss');

export default class Footer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  // componentWllMount() {
  // }
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
      className,
    } = this.props;

    return (
      <div className={ `Footer ${className || ''}` }>
        <div className="Footer__linksRow">
          <div className="Footer__links">
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              Новости
            </ModuleLink>
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              Отчеты
            </ModuleLink>
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              О компании
            </ModuleLink>
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              Правовая информация
            </ModuleLink>
          </div>
          <div className="Footer__linksAdditional">
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              ?
            </ModuleLink>
            <ModuleLink
              modulePath={ '' }
              moduleName={ '' }
            >
              Поддержка
            </ModuleLink>
          </div>
        </div>
        <div className="Footer__socialRow">
          <div className="Footer__logo">
            2018 Проект
          </div>
          <div className="Footer__social">
            <div className="icon social vk" />
            <div className="icon social facebook" />
            <div className="icon social instagram" />
            <div className="icon social telegram" />
            <div className="icon social twitter" />
          </div>
        </div>
      </div>
    );
  }
}
