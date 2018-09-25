import { joinUri } from '@reagentum/front-core/lib/common/utils/uri-utils';
import { <%=entityNameUpper%>_TYPES } from './model-<%=entityNameKebab%>';

export { default as MODULE_NAME } from './module-name';

export const ROUTES_NAMES = {
  new: 'new',
  edit: 'edit',
};

export const PATH_<%=moduleNameUpper%>_INDEX = '/';

export const PATH_PARAM_<%=entityNameUpper%>_ID = 'id';
export function getPath<%=entityNameCapital%>(id, isEdit = false) {
  return joinUri(PATH_<%=moduleNameUpper%>_INDEX, `${id || ROUTES_NAMES.new}`, isEdit ? ROUTES_NAMES.edit : null);
}
export function getPath<%=moduleNameCapital%>(filters = {}, meta = {}) {
  return joinUri(
    PATH_<%=moduleNameUpper%>_INDEX,
    {
      ...meta,
      filters,
    },
  );
}

export const PATH_<%=moduleNameUpper%>_NEW = joinUri(PATH_<%=moduleNameUpper%>_INDEX, ROUTES_NAMES.new);

export default ROUTES_NAMES;
