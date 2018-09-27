import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bind from 'lodash-decorators/bind';

import {
  TYPES,
  SUB_TYPES,
} from '@reagentum/front-core/lib/common/models/model-field';
import ACTION_STATUS_PROP from '@reagentum/front-core/lib/common/models/model-action-status';
import reduxSimpleForm from '@reagentum/front-core/lib/common/utils/decorators/react-class/redux-simple-form';

import i18n, { NAMESPACE } from '../../i18n';

import {
  <%=entityNameUpper%>_PROP_TYPE,
  DEFAULT_<%=entityNameUpper%>,
} from '../../model-<%=entityNameKebab%>';

import getComponents from '../../get-components';

const {
  Segment,
  Form,
  InstanceAttachment,
} = getComponents();

// require('./<%=entityNameCapital%>New.scss');

export const PAGE_ID = '<%=entityNameCapital%>New';

@reduxSimpleForm(
  PAGE_ID,
  {
    ...DEFAULT_<%=entityNameUpper%>,
  },
)
export default class <%=entityNameCapital%>New extends PureComponent {
  static propTypes = {
    // ======================================================
    // PROPS
    // ======================================================
    actionCreate<%=entityNameCapital%>Status: ACTION_STATUS_PROP,
    initValues: PropTypes.any,

    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,

    // ======================================================
    // @reduxSimpleForm
    // ======================================================
    form: <%=entityNameUpper%>_PROP_TYPE,
    formId: PropTypes.string,
    onUpdateForm: PropTypes.func,
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
  getFields() {
    const {
      form: {
        name,
        attachments,
      },
    } = this.props;

    const fields = [];

    fields.push(
      {
        name: 'name',
        required: true,
        value: name,
      },
      {
        name: 'attachments',
        type: TYPES.BINARY,
        multiple: true,
        required: false,
        constraints: {
          multipleMaxSize: 10,
        },
        controlProps: {
          accept: '.png, .jpg, .jpeg',
          addButtonText: 'Загрузить фотографии',
        },
        value: attachments,
        controlClass: InstanceAttachment,
      },
    );
    return fields;
  }

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      onUpdateForm,
      onSubmit,
      onCancel,
      form,
      formId,
      actionCreate<%=entityNameCapital%>Status,
    } = this.props;

    return (
      <Segment
        className="<%=entityNameCapital%>New"
        label={ i18n('components.<%=entityNameCapital%>New.header') }
      >
        <Form
          id={ formId }
          i18nFieldPrefix={ `${NAMESPACE}:components.<%=entityNameCapital%>New.fields` }

          fields={ this.getFields() }
          formData={ form }
          onChangeField={ onUpdateForm }

          onSubmit={ onSubmit }
          textActionSubmit={ i18n('components.<%=entityNameCapital%>New.submitButton') }
          onCancel={ onCancel }
          textActionCancel={ i18n('components.<%=entityNameCapital%>New.cancelButton') }

          actionStatus={ actionCreate<%=entityNameCapital%>Status }
        />
      </Segment>
    );
  }
}
