import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bind from 'lodash-decorators/bind';

// import i18n from '../../i18n';

import <%=entityNameUpper%>_PROP_TYPE from '../../model-<%=entityNameKebab%>';

import NO_IMAGE from '../no-image.png';

import getComponents from '../../get-components';

const {
  Link,
  Button,
  Card,
  Image,
} = getComponents();

require('./<%=entityNameCapital%>Card.scss');

export default class <%=entityNameCapital%>Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    <%=entityNameCamel%>: <%=entityNameUpper%>_PROP_TYPE,
    <%=entityNameCamel%>Url: PropTypes.string,
    onEdit: PropTypes.func,
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
      <%=entityNameCamel%>,
      <%=entityNameCamel%>Url,
      onEdit,
    } = this.props;

    const {
      // id,
      name,
      attachments,
    } = <%=entityNameCamel%>;

    const imageFinal = attachments[0] ? attachments[0].downloadUrl || attachments[0] : NO_IMAGE;

    return (
      <Card className={ `<%=entityNameCapital%>Card ${className || ''}` }>
        <div className="<%=entityNameCapital%>Card__image">
          {
            imageFinal && <%=entityNameCamel%>Url
              ? (
                <Link to={ <%=entityNameCamel%>Url }>
                  <Image src={ imageFinal } />
                </Link>
              )
              : imageFinal && (
                <Image src={ imageFinal } />
              )
          }
        </div>
        <Card.Content className="<%=entityNameCapital%>Card__content">
          <Card.Header className="<%=entityNameCapital%>Card__name">
            <Link to={ <%=entityNameCamel%>Url }>
              { name }
            </Link>
          </Card.Header>
          <div className="<%=entityNameCapital%>Card__money">
            {
              onEdit && (
                <Button
                  className="<%=entityNameCapital%>Card__editButton"
                  onClick={ () => onEdit(<%=entityNameCamel%>) }
                >
                  Редактировать
                </Button>
              )
            }
          </div>
        </Card.Content>
      </Card>
    );
  }
}
