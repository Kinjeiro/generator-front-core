/* eslint-disable comma-dangle,no-multi-str,max-len */
const packageJson = require('./package.json');
const { getLogPaths } = require('./ecosystem-utils');

const appName = packageJson.name;
// const appVersion = packageJson.version;

const START_SCRIPT = process.env.START_SCRIPT || './.build/server.js';

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: appName,
      script: START_SCRIPT,

      ...getLogPaths(),

      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    }
  ]
};
