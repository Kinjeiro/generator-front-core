'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const { LAST_VERSION } = require('../core-versions');

describe('generator-front-core:app', () => {
  beforeAll(() => {
    jest.setTimeout(30000); // 30 second

    // Helpers.setUpTestDirectory(path.join(__dirname, '../testDir'));
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        console.warn('Test directory:', dir);
      })
      .withPrompts({
        coreVersion: LAST_VERSION,
        projectName: 'testProjectName',
        projectTitle: 'testProjectTitle',
        // CoreLibsType: 0,
        // privateNpmKey: 'testPrivateNpmKey'
        coreLibsType: 1,
        pathToCoreLib:
          'h:\\__CODER__\\_W_Reagentum_\\_FRONT_CORE_\\front-core\\minimizedPackage\\front-core',
        pathToCoreComponentsLib:
          'h:\\__CODER__\\_W_Reagentum_\\_FRONT_CORE_\\frontCore_Components\\minimizedPackage\\frontCore_Components'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
