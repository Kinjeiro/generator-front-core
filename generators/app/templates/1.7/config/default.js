const path = require('path');

const {
  extendDeep,
  loadFileConfigs
} = require('@reagentum/front-core/config/utils/configLib-utils');
const { createEndpointServiceConfig } = require('@reagentum/front-core/config/utils/create-config');
const {
  inNodeModules,
  getI18nModules
} = require('@reagentum/front-core/build-scripts/utils/path-utils');

const { parseObjectFromNodeEnv } = require('./utils/node-env-object');

/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-undef */
const packageJson = require(path.join(process.cwd(), 'package.json'));
const APP_ID = packageJson.name;
/* eslint-enable import/no-dynamic-require */
/* eslint-enable no-undef */

const {
  // MONGO_URI,
  // TEST_MONGO_URI,
  // MONGO_USER,
  // MONGO_PASSWORD,
  // DROP_ON_START = false,
  CUSTOM_CONFIG
  // eslint-disable-next-line no-undef
} = process.env;

const customConfig = parseObjectFromNodeEnv(CUSTOM_CONFIG);

/* eslint-disable */
//const { createEndpointFactoryFromEnv } = require('@reagentum/front-core/config/create-config');
//const endpoint = createEndpointFactoryFromEnv();

// const {
//   /** Марафон при запуска автоматически добавляет адресс хоста в эту переменную */
//   HOST,
//   SERVICES_HOST,
//   SERVICES_PORT,
//   /** Первый запуск мидловых сервисов бывает до 20 сек*/
//   REQUEST_TIMEOUT = 120000,
// } = process.env;

const serviceAuth = createEndpointServiceConfig({
  protocol: 'https',
  port: 1338,
  endpoint: 'api',
  requestOptions: {
    // игнорировать, что сертификат не подписан
    rejectUnauthorized: false
  }
});

const middlewareApiService = createEndpointServiceConfig({
  host: '111.222.333.444',
  port: 8090,
  endpoint: 'api',
});

// parent config
// @guide - компоненты уже унаследованы от фронт коры
// loadFileConfigs(inNodeModules('@reagentum/front-core/config')),
const parentConfig = loadFileConfigs(inNodeModules('@reagentum/frontCore_Components/config'));

module.exports = extendDeep(
  parentConfig,
  {
    // ======================================================
    // ОБЩИЕ КОНФИГИ для КЛИЕНТА И СЕРВЕРА
    // ======================================================
    common: {
      preLoader: {
        autoClose: 500
      },
      features: {
        auth: {
          allowSignup: true,
          allowResetPasswordByEmail: true,
          emailAsLogin: true,

          // socialProvides: {
          //   google: true,
          //   vkontakte: true,
          //   facebook: true
          // },
        },
        i18n: {
          i18nextOptions: {
            //see \static\i18n\en\project.js
            ns: [
              ...parentConfig.common.features.i18n.i18nextOptions.ns,
              'project',
              ...getI18nModules()
            ],
          }
        },
        date: {
          // dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
          // dateFormat: 'DD.MM.YYYY',
          // systemDateFormat: 'iso',
          // systemDateTimeFormat: 'iso',
          // serverDateFormat: 'iso',
          // serverDateTimeFormat: 'iso'
        }
      },

      // // все apiConfig будут создавать без префикса api/
      // serverApiPrefix: 'api',

      // на стенде нужно от своего относительного пути запускать все запросы
      // apiClientEndpoint: {
      //   port: 8080,
      // },
    },

    // ======================================================
    // конфиги для КЛИЕНТА
    // ======================================================
    client: {
    },

    // ======================================================
    // конфиги для СЕРВЕРА
    // ======================================================
    server: {
      features: {
        // serverFeatures: {
        //   serverConnectionOptions: {
        //     routes: {
        //       cors: {
        //         additionalHeaders: [
        //           ...parentConfig.server.features.serverFeatures.serverConnectionOptions.routes.cors.additionalHeaders,
        //           'SAUID',
        //         ],
        //       }
        //     }
        //   },
        // },
        //
        // auth: {
        // },

        mocking: {
          enable: true,
          useMocks: true,
          authMock: false
        },
        auth: {
          protectorUser: {
            // todo @ANKU @CRIT @MAIN - убрать и указывать лишь при старте
            password: `${APP_ID}${APP_ID}`
          },
        },

        attachments: {
          // так как у нас аттачи товаров все доступны для всех по умолчанию
          /**
           * accessPublic - все у кого есть ссылка
           * accessAuth - (default) только авторизованные пользователи
           * accessOwnerOnly - только тот, кто создал (ну и админ ;))
           * <permission> - пермишен специальный
           */
          defaultAccess: 'accessPublic'
        },

        // // ======================================================
        // // DB Mongo
        // // ======================================================
        // db: {
        //   mongoose: {
        //     uri: MONGO_URI || 'mongodb://localhost:27017/yapomosh',
        //     testUri: TEST_MONGO_URI || 'mongodb://localhost:27017/yapomoshTest',
        //     auth: {
        //       user: MONGO_USER || 'yapomoshUser',
        //       password: MONGO_PASSWORD
        //     }
        //   },
        //   dropOnStart: DROP_ON_START
        // },
      },

      endpointServices: {
        // будет использова authApiServer по умолчанию - port: 1337 \ endpoint: 'api'
        serviceAuth,
        serviceUsers: serviceAuth,

        middlewareApiService,
        // middlewareApiService: createEndpointServiceConfig({
        //   // protocol: SERVICES_PROTOCOL,
        //   host: HOST || SERVICES_HOST || '127.0.0.1',
        //   port: SERVICES_PORT || 37878,
        //   timeout: REQUEST_TIMEOUT
        //   // endpoint,
        // })
      }
    }
  },
  customConfig
);

