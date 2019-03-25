import { joinUri } from '@reagentum/front-core/lib/common/utils/uri-utils';

export { default as MODULE_NAME } from './module-name';

export const ROUTES_NAMES = {
};

export const PATH_<%=moduleNameUpper%>_INDEX = '/';

export function getPath<%=moduleNameCapital%>() {
  return joinUri(PATH_<%=moduleNameUpper%>_INDEX);
}

export default ROUTES_NAMES;
