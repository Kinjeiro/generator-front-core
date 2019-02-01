'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const {
  CORE_VERSIONS,
  MODULE_TYPES,
  MODULE_TYPES_MAP
} = require('../generators/module/index');

describe('generator-front-core:module', () => {
  beforeAll(() => {
    jest.setTimeout(30000); // 30 second

    return helpers
      .run(path.join(__dirname, '../generators/module'))
      .inTmpDir(dir => {
        console.warn('Test directory:', dir);
      })
      .withPrompts({
        coreVersion: CORE_VERSIONS[0],
        // moduleType: MODULE_TYPES[1],
        // moduleName: 'cars',
        // entityName: 'car'
        // moduleType: MODULE_TYPES_MAP.SIMPLE_MODULE,
        moduleType: MODULE_TYPES_MAP.SIMPLE_FEATURE,
        moduleName: 'Settings'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
