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
  server: {
    features: {
      mocking: {
        // authMock: false
        authMock: true
      }
      // auth: {
      //   protectorUser: {
      //     password: `${APP_ID}${APP_ID}`
      //   }
      // }
    },
    endpointServices: {
      // KEYCLOAK - протокол oauth2.0 / openconnect id (OCID)
      serviceAuth: createEndpointServiceConfig({
        protocol: 'https',
        host: '185.22.63.233',
        port: 443,
        endpoint: 'auth'
      }),
      serviceUsers: createEndpointServiceConfig({
        protocol: 'https',
        host: '185.22.63.233',
        port: 443,
        endpoint: 'auth'
      }),
    }
  }
};

