'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

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
        projectName: 'testProjectName',
        projectTitle: 'testProjectTitle',
        // CoreLibsType: 0,
        // privateNpmKey: 'testPrivateNpmKey'
        coreLibsType: 1,
        pathToCoreLib:
          'H:\\__CODER__\\_W_Reagentum_\\__Gasprom__\\Project_Rascenka\\formRascenka_FrontCore\\minimizedPackage\\front-core',
        pathToCoreComponentsLib:
          'H:\\__CODER__\\_W_Reagentum_\\_FRONT_CORE_\\FrontCore_Components\\minimizedPackage\\frontCore_Components'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
