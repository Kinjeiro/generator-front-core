import PropTypes from 'prop-types';

import ID from '@reagentum/front-core/lib/common/models/model-id';
// import DATE from '@reagentum/front-core/lib/common/models/model-date';

import ATTACHMENT from '@reagentum/frontCore_Components/lib/common/models/model-attachment';

export const <%=entityNameUpper%>_PROP_TYPE_MAP = {
  id: ID,
  name: PropTypes.string,
  attachments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    ATTACHMENT,
    PropTypes.arrayOf(ATTACHMENT),
  ]),
};

export function create<%=entityNameCapital%>(
  id,
  name = '',
  attachments = [],
) {
  return {
    id,
    name,
    attachments,
  };
}

export const DEFAULT_<%=entityNameUpper%> = create<%=entityNameCapital%>();

export const <%=entityNameUpper%>_PROP_TYPE = PropTypes.shape(<%=entityNameUpper%>_PROP_TYPE_MAP);

export default <%=entityNameUpper%>_PROP_TYPE;
