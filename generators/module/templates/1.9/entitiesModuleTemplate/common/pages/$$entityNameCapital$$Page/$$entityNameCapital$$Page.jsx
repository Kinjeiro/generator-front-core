import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';
import titled from '@reagentum/front-core/lib/common/utils/decorators/react-class/titled';
import loading from '@reagentum/front-core/lib/common/utils/decorators/react-class/loading';
import ACTION_STATUS_PROP_TYPE from '@reagentum/front-core/lib/common/models/model-action-status';

import MODULE_NAME from '../../module-name';
import { actions } from '../../redux-<%=entityNameKebab%>';
import {
  get<%=entityNameCapital%>Info,
} from '../../redux-selectors-<%=moduleNameKebab%>';
import {
  PATH_PARAM_<%=entityNameUpper%>_ID,
  getPath<%=moduleNameCapital%>,
  getPath<%=entityNameCapital%>,
} from '../../routes-paths-<%=moduleNameKebab%>';
import <%=entityNameUpper%>_PROP_TYPE from '../../model-<%=entityNameKebab%>';

import getComponents from '../../get-components';

import NO_IMAGE from '../../components/no-image.png';

const {
  Button,
  Carousel,
  Loading,
} = getComponents();

require('./<%=entityNameCapital%>Page.scss');

@contextModules()
@connect(
  (globalState, props) => {
    const <%=entityNameCamel%>Id = props.params[PATH_PARAM_<%=entityNameUpper%>_ID];
    const <%=entityNameCamel%>Info = get<%=entityNameCapital%>Info(globalState);

    return {
      <%=entityNameCamel%>Id,
      ...<%=entityNameCamel%>Info,
    };
  }, {
    ...actions,
  },
)
@titled('<%=entityNameCapital%>Page', '<%=entityNameCapital%> page')
@loading('actionLoad<%=entityNameCapital%>Status')
export default class <%=entityNameCapital%>Page extends PureComponent {
  static propTypes = {
    // ======================================================
    // PROPS
    // ======================================================
    className: PropTypes.string,

    // ======================================================
    // query
    // ======================================================
    <%=entityNameCamel%>Id: PropTypes.number,

    // ======================================================
    // @connect
    // ======================================================
    <%=entityNameCamel%>: <%=entityNameUpper%>_PROP_TYPE,
    actionLoad<%=entityNameCapital%>Status: ACTION_STATUS_PROP_TYPE,
    actionLoad<%=entityNameCapital%>: PropTypes.func,

    // ======================================================
    // @contextModules
    // ======================================================
    onGoTo: PropTypes.func,
  };

  static defaultProps = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  componentDidMount() {
    const {
      <%=entityNameCamel%>Id,
      actionLoad<%=entityNameCapital%>,
    } = this.props;
    actionLoad<%=entityNameCapital%>(<%=entityNameCamel%>Id);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      <%=entityNameCamel%>Id,
      actionLoad<%=entityNameCapital%>,
    } = this.props;

    if (<%=entityNameCamel%>Id !== prevProps.<%=entityNameCamel%>Id) {
      actionLoad<%=entityNameCapital%>(<%=entityNameCamel%>Id);
    }
  }


  // ======================================================
  // HANDLERS
  // ======================================================


  // ======================================================
  // RENDERS
  // ======================================================


  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      <%=entityNameCamel%>,
      actionLoad<%=entityNameCapital%>Status: {
        isFetching,
      },
      className,
      onGoTo,
    } = this.props;

    const {
      id,
      name,
      attachments,
    } = <%=entityNameCamel%>;

    const images = attachments && attachments.length > 0
      ? attachments.map((attachment) => typeof attachment === 'string' ? attachment : attachment.downloadUrl)
      : [NO_IMAGE];

    return (
      <div className={ `<%=entityNameCapital%>Page ${className || ''} ${!attachments || attachments.length === 0 ? '<%=entityNameCapital%>Page--noImages' : ''}` }>
        <div className="<%=entityNameCapital%>Page__toolbar">
          <Button
            className="<%=entityNameCapital%>Page__toolbarEdit"
            onClick={ () => onGoTo(getPath<%=entityNameCapital%>(id, true), MODULE_NAME) }
          >
            редактировать
          </Button>
        </div>
        <div className="<%=entityNameCapital%>Page__main">
          <Carousel
            className="<%=entityNameCapital%>Page__photos"
            items={ images }
          />
          <div className="<%=entityNameCapital%>Page__infoWrapper">
            <div className="<%=entityNameCapital%>Page__info">
              <div className="<%=entityNameCapital%>Page__params <%=entityNameCapital%>PageParams">
                <div className="<%=entityNameCapital%>PageParams__name">{ name }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
