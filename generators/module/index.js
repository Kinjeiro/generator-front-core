'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, capitalize, kebabCase, snakeCase } = require('lodash');
const Generator = require('yeoman-generator');
// Const Generator = require('../UniGenerator');

const packageJson = require(path.resolve(__dirname, '../../package.json'));
const APP_ID = packageJson.name;
const APP_VERSION = packageJson.version;

const {
  validateRequire,
  commonWriting
} = require('../utils');

const {
  CORE_VERSIONS,
  LAST_VERSION,
} = require('../core-versions');

const MODULE_TYPES_MAP = {
  SIMPLE_MODULE: 'Simple module',
  SIMPLE_UI_FEATURE: 'Simple ui feature',
  SIMPLE_FEATURE: 'Simple feature',
  ENTITIES_MODULE: 'Entities module (with crud)'
};

const MODULE_TYPES = [
  MODULE_TYPES_MAP.SIMPLE_MODULE,
  MODULE_TYPES_MAP.SIMPLE_UI_FEATURE,
  MODULE_TYPES_MAP.SIMPLE_FEATURE,
  MODULE_TYPES_MAP.ENTITIES_MODULE
];

class ModuleGenerator extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the\n' + chalk.red('generator-front-core' + '\n v ' + APP_VERSION) + ' generator!')
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
        name: 'entitiesName',
        message: ({ moduleType }) => (
          moduleType === MODULE_TYPES_MAP.ENTITIES_MODULE
          ? 'Your entities name (multiple, like as "Cars"):'
          : 'Your module name:'
        ),
        validate: validateRequire
      },
      {
        type: 'input',
        name: 'moduleName',
        message: ({ moduleType }) => (
          moduleType === MODULE_TYPES_MAP.ENTITIES_MODULE
          ? 'Your entities name (multiple, like as "Cars"):'
          : 'Your module name:'
        ),
        validate: validateRequire
      },
      {
        type: 'input',
        name: 'entityName',
        message: 'Your entity name (like as "Car"):',
        when: ({ moduleType }) => moduleType === MODULE_TYPES_MAP.ENTITIES_MODULE,
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
      stub: '',
      ...this.props,
      ...this.answers,

      prefix: moduleType === MODULE_TYPES_MAP.SIMPLE_FEATURE || moduleType === MODULE_TYPES_MAP.SIMPLE_UI_FEATURE
        ? 'feature'
        : 'module',

      moduleName: kebabCase(moduleName),
      moduleNameKebab: kebabCase(moduleName),
      moduleNameCamel: camelCase(moduleName),
      moduleNameCapital: `${capitalize(moduleName[0])}${camelCase(moduleName.substr(1))}`,
      moduleNameUpper: snakeCase(moduleName).toUpperCase()
    };

    if (moduleType === MODULE_TYPES_MAP.ENTITIES_MODULE) {
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
      prefix,
      moduleType,
    } = this.props;

    if (moduleType === MODULE_TYPES_MAP.SIMPLE_UI_FEATURE) {
      commonWriting(
        this,
        'simpleModuleTemplateUi',
        `./src/modules/${prefix}-${this.props.moduleNameKebab}`
      );
    } else {
      commonWriting(
        this,
        moduleType === MODULE_TYPES_MAP.ENTITIES_MODULE
          ? 'entitiesModuleTemplate'
          : 'simpleModuleTemplateExt',
        `./src/modules/${prefix}-${this.props.moduleNameKebab}`
      );
    }
  }
}

ModuleGenerator.CORE_VERSIONS = CORE_VERSIONS;
ModuleGenerator.MODULE_TYPES = MODULE_TYPES;
ModuleGenerator.MODULE_TYPES_MAP = MODULE_TYPES_MAP;

module.exports = ModuleGenerator;
