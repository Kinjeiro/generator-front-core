'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-front-core:module', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/module'))
      .inTmpDir(dir => {
        console.warn('Test directory:', dir);
      })
      .withPrompts({
        moduleName: 'test-cars',
        entityName: 'testCar'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
