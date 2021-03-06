import i18n from '@reagentum/front-core/lib/common/utils/i18n-utils';

import moduleName from './module-name';

// module-auth
export const NAMESPACE = `<%=prefix%>-${moduleName}`;

function i18nWrapper(key, ...other) {
  const namespaceFinal = key.indexOf(':') < 0
    ? `${NAMESPACE}:`
    : '';

  return i18n(`${namespaceFinal}${key}`, ...other);
}

export default i18nWrapper;
