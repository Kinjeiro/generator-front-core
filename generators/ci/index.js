'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

const { commonWriting } = require('../utils');
const {
  CORE_VERSIONS,
  LAST_VERSION,
} = require('../core-versions');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to FrontCore [FC] ' + chalk.red('Continues Integration (CI)') + ' generator!'
      )
    );

    // https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'coreVersion',
        message: 'What core version do you use:',
        choices: CORE_VERSIONS,
        default: LAST_VERSION
      }
    ]);

    this.answers = answers;
    this.props = {
      ...this.props,
      ...this.answers
    };
  }

  writing() {
    commonWriting(this);
  }
};
