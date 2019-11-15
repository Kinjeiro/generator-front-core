const { createEndpointServiceConfig } = require('@reagentum/front-core/config/utils/create-config');

module.exports = {
  server: {
    features: {
      mocking: {
        enable: true,
        useMocks: true,
        useMocksInitData: true,
        authMock: true
      },
      // auth: {
      //   applicationClientInfo: {
      //     client_id: 'project_client_id',
      //     client_secret: '123456'
      //   }
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
};
