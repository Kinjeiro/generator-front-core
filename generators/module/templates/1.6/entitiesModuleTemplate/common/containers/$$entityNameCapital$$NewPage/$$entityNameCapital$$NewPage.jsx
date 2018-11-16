import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import bind from 'lodash-decorators/bind';

import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';

// import i18n from '../../i18n';
import getComponents from '../../get-components';
import { actions } from '../../redux-<%=entityNameKebab%>';
import {
  get<%=entityNameCapital%>Info,
} from '../../redux-selectors-<%=moduleNameKebab%>';
import * as paths from '../../routes-paths-<%=moduleNameKebab%>';

// import './<%=entityNameCapital%>NewPage.scss';

const {
  Loading,

  <%=entityNameCapital%>New,
} = getComponents();

// после подгрузки стилей для <%=entityNameCapital%>New
require('./<%=entityNameCapital%>NewPage.scss');

@contextModules()
@connect(
  (globalState, { params }) => {
    const <%=entityNameCamel%>Id = params[paths.PATH_PARAM_<%=entityNameUpper%>_ID];
    return {
      <%=entityNameCamel%>Id,
      isEdit: !!<%=entityNameCamel%>Id,
      ...get<%=entityNameCapital%>Info(globalState),
    };
  },
  {
    ...actions,
    actionGoTo: push,
    actionGoBack: goBack,
  },
)
export default class <%=entityNameCapital%>NewPage extends Component {
  static propTypes = {
    // ======================================================
    // @contextModules
    // ======================================================
    onGoTo: PropTypes.func,

    // ======================================================
    // @connect
    // ======================================================
    <%=entityNameCamel%>Id: PropTypes.string,
    isEdit: PropTypes.bool,

    <%=entityNameCamel%>: PropTypes.object,

    actionCreate<%=entityNameCapital%>: PropTypes.func,
    actionCreate<%=entityNameCapital%>Status: PropTypes.object,
    actionEdit<%=entityNameCapital%>: PropTypes.func,
    actionEdit<%=entityNameCapital%>Status: PropTypes.object,
    actionLoad<%=entityNameCapital%>: PropTypes.func,
    actionLoad<%=entityNameCapital%>Status: PropTypes.object,
    actionClear<%=entityNameCapital%>: PropTypes.func,
    actionGoTo: PropTypes.func,
    actionGoBack: PropTypes.func,
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  componentWillMount() {
    const {
      isEdit,
      <%=entityNameCamel%>Id,
      actionLoad<%=entityNameCapital%>,
    } = this.props;

    if (isEdit) {
      actionLoad<%=entityNameCapital%>(<%=entityNameCamel%>Id);
    }
  }
  componentWillReceiveProps(newProps) {
    const {
      <%=entityNameCamel%>,
      onGoTo,
      actionCreate<%=entityNameCapital%>Status,
      actionEdit<%=entityNameCapital%>Status,
    } = newProps;

    if (actionCreate<%=entityNameCapital%>Status.isLoaded && <%=entityNameCamel%> && (!this.props.<%=entityNameCamel%> || this.props.<%=entityNameCamel%>.id !== <%=entityNameCamel%>.id)) {
      onGoTo(paths.getPath<%=entityNameCapital%>(<%=entityNameCamel%>.id), paths.MODULE_NAME);
    }
    if (actionEdit<%=entityNameCapital%>Status.isLoaded) {
      onGoTo(paths.getPath<%=entityNameCapital%>(<%=entityNameCamel%>.id), paths.MODULE_NAME);
    }
  }
  componentWillUnmount() {
    const {
      actionClear<%=entityNameCapital%>,
    } = this.props;
    actionClear<%=entityNameCapital%>();
  }


  // ======================================================
  // HANDLERS
  // ======================================================
  @bind()
  handleSubmit(formData) {
    const {
      isEdit,
      <%=entityNameCamel%>Id,
      actionCreate<%=entityNameCapital%>,
      actionEdit<%=entityNameCapital%>,
    } = this.props;

    if (isEdit) {
      return actionEdit<%=entityNameCapital%>(<%=entityNameCamel%>Id, formData);
    }
    return actionCreate<%=entityNameCapital%>(formData);
  }
  @bind()
  handleCancel() {
    const {
      actionGoBack,
    } = this.props;

    return actionGoBack();
  }

  // ======================================================
  // RENDERS
  // ======================================================


  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      isEdit,
      <%=entityNameCamel%>,
      actionLoad<%=entityNameCapital%>Status,
      actionCreate<%=entityNameCapital%>Status,
    } = this.props;

    if (isEdit && !actionLoad<%=entityNameCapital%>Status.isLoaded) {
      return (
        <Loading />
      );
    }

    return (
      <<%=entityNameCapital%>New
        { ...this.props }

        initValues={
          isEdit && <%=entityNameCamel%>
        }
        onSubmit={ this.handleSubmit }
        onCancel={ this.handleCancel }
        actionCreate<%=entityNameCapital%>={ actionCreate<%=entityNameCapital%>Status }
      />
    );
  }
}

