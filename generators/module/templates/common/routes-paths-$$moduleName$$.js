import { joinUri } from '@reagentum/front-core/lib/common/utils/uri-utils';

export { default as MODULE_NAME } from './module-name';

export const ROUTES_NAMES = {
};

export const PATH_<%=entityNameUpper%>S_INDEX = '/';

export const PATH_PARAM_<%=entityNameUpper%>_ID = 'id';
export function getPath<%=entityNameCapital%>(id) {
  return joinUri(PATH_<%=entityNameUpper%>S_INDEX, id);
}

export default ROUTES_NAMES;
