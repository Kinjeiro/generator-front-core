const path = require('path');

const packageJson = require('./package.json');

const appName = packageJson.name;

const DEFAULT_USER = 'root';

function defaultAppPath(user = DEFAULT_USER) {
  return user === 'root'
    ? `/home/${appName}`
    : `/home/${user}/${appName}`;
}

function getLogPaths(appPath = defaultAppPath()) {
  return {
    output: path.join(appPath, 'logs', 'out.log'),
    error: path.join(appPath, 'logs', 'error.log'),
    log: path.join(appPath, 'logs', 'combi.log'),
  };
}

module.exports = {
  DEFAULT_USER,
  getLogPaths,
  getAppPath: defaultAppPath,
};
