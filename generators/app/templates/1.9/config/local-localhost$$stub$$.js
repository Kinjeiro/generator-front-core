const path = require('path');

const { createEndpointServiceConfig } = require('@reagentum/front-core/config/utils/create-config');

const packageJson = require(path.join(process.cwd(), 'package.json'));
const APP_ID = packageJson.name;

module.exports = {
  // ======================================================
  // ОБЩИЕ КОНФИГИ для КЛИЕНТА И СЕРВЕРА
  // ======================================================
  common: {},

  // ======================================================
  // конфиги для КЛИЕНТА
  // ======================================================
  client: {},

  // ======================================================
  // конфиги для СЕРВЕРА
  // ======================================================
  server: {}
};

