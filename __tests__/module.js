'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-front-core:module', () => {
  beforeAll(() => {
    jest.setTimeout(30000); // 30 second

    return helpers
      .run(path.join(__dirname, '../generators/module'))
      .inTmpDir(dir => {
        console.warn('Test directory:', dir);
      })
      .withPrompts({
        moduleName: 'cars',
        entityName: 'car'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
