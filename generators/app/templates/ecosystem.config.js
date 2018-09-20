/* eslint-disable comma-dangle */
const packageJson = require('./package.json');

const appName = packageJson.name;

// Target server hostname or IP address
const TARGET_SERVER_HOST = process.env.TARGET_SERVER_HOST ? process.env.TARGET_SERVER_HOST.trim() : '';
// Target server username
const TARGET_SERVER_USER = process.env.TARGET_SERVER_USER ? process.env.TARGET_SERVER_USER.trim() : '';
// Target server application path
const TARGET_SERVER_APP_PATH = process.env.TARGET_SERVER_APP_PATH
  ? process.env.TARGET_SERVER_APP_PATH.trim()
  : TARGET_SERVER_USER === 'root'
    ? `/home/${appName}`
    : `/home/${TARGET_SERVER_USER}/${appName}`;
// Your repository
const REPO = packageJson.repository;

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: appName,
      script: './.build/server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
        SERVER_PORT: 3001,
        APP_MOCKS: 1,
        USE_MOCKS: 1,
        CONTEXT_PATH: appName
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
        SERVER_PORT: 3001,
        // CONTEXT_PATH: appName
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    development: {
      user: TARGET_SERVER_USER,
      host: TARGET_SERVER_HOST,
      ssh_options: 'StrictHostKeyChecking=no',

      ref: 'origin/master',
      repo: REPO,

      path: TARGET_SERVER_APP_PATH,
      'post-deploy': 'npm install'
      + ' && npm run build-development'
      + ' && pm2 startOrRestart ecosystem.config.js'
      + ' && pm2 save'
    },
    production: {
      user: TARGET_SERVER_USER,
      host: TARGET_SERVER_HOST,
      ssh_options: 'StrictHostKeyChecking=no',

      ref: 'origin/master',
      repo: REPO,

      path: TARGET_SERVER_APP_PATH,
      'post-deploy': 'npm install --production'
      + ' && npm run build'
      + ' && pm2 startOrRestart ecosystem.config.js --env=production'
      + ' && pm2 save'
    }
  }
};
