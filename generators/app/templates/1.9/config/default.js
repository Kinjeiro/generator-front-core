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


// parent config
// @guide - компоненты уже унаследованы от фронт коры
// loadFileConfigs(inNodeModules('@reagentum/front-core/config')),
const parentConfig = loadFileConfigs(inNodeModules('@reagentum/frontCore_Components/config'));

module.exports = extendDeep(
  parentConfig,
  {
    /*
      @NOTE: Конфиги делают глубокий мерж друг на друга
      1) ./node_modules/@reagentum/front-core/config/default.js
      2) ./config/default.js
      3) ./node_modules/@reagentum/front-core/config/<ENV>.js
      4) ./config/<ENV>.js
      5) ./config/local-<ENV>.js

      - где ENV - это окружение в каком запускаете приложение (localhost, development, production и т.д.)
    */

    // ======================================================
    // ОБЩИЕ КОНФИГИ для КЛИЕНТА И СЕРВЕРА
    // ======================================================
    common: {
      features: {
        auth: {
          // paths: {
          //   afterSignin: '/',
          //   afterSignup: '/',
          //   afterLogout: '/'
          // },
          //
          // /**
          //  * чаше всего необходимо для открытых систем, а для enterprise обычно не надо
          //  */
          // allowSignup: false,
          // allowResetPasswordByEmail: false,
          // allowResetPasswordBySms: false,

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

        // ======================================================
        // auth - настройки авторизации
        // ======================================================
        auth: {
          realm: 'myRealm',

          // Настройки для аутентификации клиента в keycloak
          // http://185.22.63.233:8080/auth/admin/master/console/#/realms/exporter/clients/5c08dfc5-2c1e-4396-9071-1da98b95796e/credentials
          applicationClientInfo: {
            /*
              === СОЗДАНИЕ ПОЛЬЗОВАТЕЛЬ в keycloak===

              ССЫЛКИ
                https://www.keycloak.org/docs/4.8/server_admin/#_service_accounts
                https://gist.github.com/thomasdarimont/c4e739c5a319cf78a4cff3b87173a84b

              КЛИЕНТ должен иметь следующие настройки

              Access Type = Confidiental
              Direct Access Grants Enabled - ON
              Service Accounts Enabled -ON (самое важно!)
              Authorization Enabled - ON


              На Табе - "Service Account Roles"
              Выбираем  "Client Roles" -> real-managment
              Добавляем роли:
                  manage-users
                  view-users
                  view-clients

             */
            client_id: 'project_client_id',
            client_secret: '2118be34-dbbf-4c71-87d5-dec1f216f0dd'
          }

          // // урлы для авторизации по протоколу oauth2Urls
          // // http://185.22.63.233:8080/auth/realms/exporter/.well-known/openid-configuration
          // oauth2Urls: {
          //   authSignin:   '/realms/{realm}/protocol/openid-connect/token',            // "https://185.22.63.233:443/auth/realms/exporter/protocol/openid-connect/token",
          //   authRefresh:  '/realms/{realm}/protocol/openid-connect/token',            // "https://185.22.63.233:443/auth/realms/exporter/protocol/openid-connect/token",
          //   authValidate: '/realms/{realm}/protocol/openid-connect/token/introspect', // "https://185.22.63.233:443/auth/realms/exporter/protocol/openid-connect/token/introspect",
          //   authUserInfo: '/realms/{realm}/protocol/openid-connect/userinfo',         // "https://185.22.63.233:443/auth/realms/exporter/protocol/openid-connect/userinfo",
          //   authSignout:  '/realms/{realm}/protocol/openid-connect/logout',           // "https://185.22.63.233:443/auth/realms/exporter/protocol/openid-connect/logout",
          //
          //   authSocialProviderSignin: '/social/{provider}'
          // }
        },

        users: {
          // serviceUsers: {
          //   urls: {
          //     // https://www.keycloak.org/docs-api/5.0/rest-api/index.html#_users_resource
          //
          //     // by admin
          //     findUsers:          '/admin/realms/{realm}/users', // [GET]
          //     userSignup:         '/admin/realms/{realm}/users', // [POST]
          //     loadUser:           '/admin/realms/{realm}/users/{userId}',   // [GET] - получение частисных данных пользователя (телефон, почта и так далее). **Нужна роль 'protector'**
          //     editUser:           '/admin/realms/{realm}/users/{userId}',            // [PUT] - изменение данных пользователя админом
          //     deleteUser:         '/admin/realms/{realm}/users/{userId}',            // [DELETE] - удаление пользователя админом
          //
          //     revokeTokens:       '/admin/realms/{realm}/users/{userId}/consents/{clientId}',                          // удаление токенов доступа, при краже или смене пароля
          //     resetPassword:      '/admin/realms/{realm}/users/{userId}/reset-password'  // PUT /{realm}/users/{id}/reset-password
          //   }
          // }
        },

        attachments: {
          // /**
          //  * accessPublic - все у кого есть ссылка
          //  * accessAuth - (default) - только авторизованные пользователи
          //  * accessOwnerOnly - только тот, кто создал (ну и админ ;))
          //  * <permission> - пермишен специальный
          //  */
          // defaultAccess: 'accessAuth'

          // serviceAttachmentContents: {
          //   urls: {
          //     uploadFile: '/attachment/upload',                 // POST
          //     downloadFile: '/attachment/download/{contentId}', // GET
          //     deleteFile: '/attachment/{contentId}'             // DELETE
          //   }
          // }
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

        middlewareApiService: createEndpointServiceConfig({
          host: '111.222.333.444',
          port: 8090,
          endpoint: 'api'
        })
      }
    }
  },
  customConfig
);

