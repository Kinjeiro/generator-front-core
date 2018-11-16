'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, capitalize, kebabCase, snakeCase } = require('lodash');
const rename = require('gulp-rename');
const Generator = require('yeoman-generator');
// Const Generator = require('../UniGenerator');

const CORE_VERSIONS = require('../core-versions');

function validateRequire(input) {
  // // Declare function as asynchronous, and save the done callback
  // var done = this.async();
  return Boolean(input);
}

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
        default: CORE_VERSIONS[0]
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
    // This.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );

    this.registerTransformStream(
      rename(path => {
        for (let prop in this.props) {
          let regexp = new RegExp('\\$\\$' + prop + '\\$\\$', 'g');
          path.basename = path.basename.replace(regexp, this.props[prop]);
          path.dirname = path.dirname.replace(regexp, this.props[prop]);
        }
      })
    );
    console.warn('Props for templates:\n', JSON.stringify(this.props, null, 2));
    const {
      moduleType,
      coreVersion,
    } = this.props;

    this.fs.copyTpl(
      this.templatePath(
        coreVersion,
        moduleType === MODULE_TYPES[0]
          ? 'simpleModuleTemplate'
          : 'entitiesModuleTemplate'
      ),
      this.destinationPath(`./src/modules/module-${this.props.moduleNameKebab}`),
      this.props,
      undefined,
      {
        globOptions: { dot: true }
      }
    );
  }
}

ModuleGenerator.CORE_VERSIONS = CORE_VERSIONS;
ModuleGenerator.MODULE_TYPES = MODULE_TYPES;

module.exports = ModuleGenerator;
