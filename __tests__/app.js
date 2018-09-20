'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-front-core:app', () => {
  beforeAll(() => {
    // Helpers.setUpTestDirectory(path.join(__dirname, '../testDir'));
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        console.warn('Test directory:', dir);
      })
      .withPrompts({
        projectName: 'testProjectName',
        privateNpmKey: 'testPrivateNpmKey'
      });
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
