'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, capitalize, kebabCase, snakeCase } = require('lodash');
const Generator = require('yeoman-generator');
// Const Generator = require('../UniGenerator');

const {
  validateRequire,
  commonWriting
} = require('../utils');
const {
  CORE_VERSIONS,
  LAST_VERSION,
} = require('../core-versions');

const MODULE_TYPES = [
  'Simple module',
  'Entities module (with crud)'
];

class ModuleGenerator extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the tiptop ' + chalk.red('generator-front-core') + ' generator!')
    );

    const answers = await this.prompt([
      {
        type: 'list',
        name: 'coreVersion',
        message: 'What core version do you use:',
        choices: CORE_VERSIONS,
        default: LAST_VERSION
      },
      {
        type: 'list',
        name: 'moduleType',
        message: 'What module type do you want:',
        choices: MODULE_TYPES,
        default: MODULE_TYPES[0]
      },
      {
        type: 'input',
        name: 'moduleName',
        message: ({ moduleType }) => (
          moduleType === MODULE_TYPES[0]
          ? 'Your module name:'
          : 'Your entities name (multiple, like as "Cars"):'
        ),
        validate: validateRequire
      },
      {
        type: 'input',
        name: 'entityName',
        message: 'Your entity name (like as "Car"):',
        when: ({ moduleType }) => moduleType === MODULE_TYPES[1],
        validate: validateRequire
      }
    ]);

    const {
      moduleType,
      moduleName,
      entityName,
    } = answers;

    this.answers = answers;
    this.props = {
      ...this.props,
      ...this.answers,

      moduleName: kebabCase(moduleName),
      moduleNameKebab: kebabCase(moduleName),
      moduleNameCamel: camelCase(moduleName),
      moduleNameCapital: `${capitalize(moduleName[0])}${camelCase(moduleName.substr(1))}`,
      moduleNameUpper: snakeCase(moduleName).toUpperCase()
    };

    if (moduleType === MODULE_TYPES[1]) {
      Object.assign(this.props, {
        entityName: kebabCase(entityName),
        entityNameKebab: kebabCase(entityName),
        entityNameCamel: camelCase(entityName),
        entityNameCapital: `${capitalize(entityName[0])}${camelCase(entityName.substr(1))}`,
        entityNameUpper: snakeCase(entityName).toUpperCase()
      });
    }
  }

  writing() {
    const {
      moduleType,
    } = this.props;

    commonWriting(
      this,
      moduleType === MODULE_TYPES[0]
        ? 'simpleModuleTemplate'
        : 'entitiesModuleTemplate',
      `./src/modules/module-${this.props.moduleNameKebab}`
    );
  }
}

ModuleGenerator.CORE_VERSIONS = CORE_VERSIONS;
ModuleGenerator.MODULE_TYPES = MODULE_TYPES;

module.exports = ModuleGenerator;
