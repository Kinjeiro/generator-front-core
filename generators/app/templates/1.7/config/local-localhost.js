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
      serviceAuth: createEndpointServiceConfig({
        host: 'dev.reagentum.ru',
        protocol: 'https',
        port: 1338,
        endpoint: 'api',
        requestOptions: {
          // игнорировать, что сертификат не подписан
          rejectUnauthorized: false
        }
      }),
      serviceUsers: createEndpointServiceConfig({
        host: 'dev.reagentum.ru',
        protocol: 'https',
        port: 1338,
        endpoint: 'api',
        requestOptions: {
          // игнорировать, что сертификат не подписан
          rejectUnauthorized: false
        }
      })
    }
  }
};

