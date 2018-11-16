const path = require('path');

const { getModulesStatic } = require('@reagentum/front-core/build-scripts/utils/path-utils');
// const PARENT_WEBPACK_CONTEXT = require('@reagentum/front-core/build-scripts/webpack-context');
// @guide - компоненты уже унаследованы от фронт коры
const PARENT_WEBPACK_CONTEXT = require('@reagentum/frontCore_Components/build-scripts/webpack-context');

const CURRENT_FILE_PATH = __dirname;

function inThisProject(...args) {
  return path.resolve(CURRENT_FILE_PATH, '..', ...args);
}

// ======================================================
// PROJECT
// ======================================================
const appStyleConfig = require('../src/common/app-styles/vars.js');
const projectStatic = inThisProject('static');

// ======================================================
// CONTEXT
// ======================================================
module.exports = Object.assign(
  {},
  // PARENT_WEBPACK_CONTEXT,
  PARENT_WEBPACK_CONTEXT,
  {
    appStyleConfig,
    staticPaths: [
      // ...PARENT_WEBPACK_CONTEXT.staticPaths,
      ...PARENT_WEBPACK_CONTEXT.staticPaths,
      // абсолютные, чтобы другие проекты могли добавлять свои
      projectStatic,
      ...getModulesStatic()
    ],
    babelNodeModulesWhitelist: [
      ...(PARENT_WEBPACK_CONTEXT.babelNodeModulesWhitelist || []),
      '@reagentum/front-core',
      '@reagentum/frontСore_Components'
    ]
  }
);
