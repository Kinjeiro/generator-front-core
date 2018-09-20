import PropTypes from 'prop-types';
import ID from '@reagentum/front-core/lib/common/models/model-id';
import DATE from '@reagentum/front-core/lib/common/models/model-date';

export const <%=entityNameUpper%>_PROP_TYPE_MAP = {
  id: ID,
};

export function create<%=entityNameCapital%>(
  id,
) {
  return {
    id,
  };
}

export const <%=entityNameUpper%>_PROP_TYPE = PropTypes.shape(<%=entityNameUpper%>_PROP_TYPE_MAP);

export default <%=entityNameUpper%>_PROP_TYPE;
