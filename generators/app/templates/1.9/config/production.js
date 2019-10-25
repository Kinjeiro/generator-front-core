const { createEndpointServiceConfig } = require('@reagentum/front-core/config/utils/create-config');

module.exports = {
  common: {
    features: {
      notifications: {
        ui: false
      }
    }
  },
  server: {
    features: {
      mocking: {
        enable: true,
        useMocks: false,
        authMock: false
      },
      auth: {
        applicationClientInfo: {
          client_id: 'project_client_id',
          client_secret: '123456'
        }
      },
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
        host: '185.22.63.233',
        port: 38080
        // endpoint: 'api',
      })
    }
  }
};
