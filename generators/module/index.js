'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, capitalize, kebabCase, snakeCase } = require('lodash');
const rename = require('gulp-rename');
const Generator = require('yeoman-generator');
// Const Generator = require('../UniGenerator');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the tiptop ' + chalk.red('generator-front-core') + ' generator!')
    );

    const answers = await this.prompt([
      {
        type: 'input',
        name: 'moduleName',
        message: 'Your module name'
      },
      {
        type: 'input',
        name: 'entityName',
        message: 'Your entity name'
      }
    ]);

    const { moduleName, entityName } = answers;

    this.answers = answers;
    this.props = {
      ...this.props,
      ...this.answers,

      moduleName: kebabCase(moduleName),
      moduleNameKebab: kebabCase(moduleName),
      moduleNameCamel: camelCase(moduleName),
      moduleNameCapital: `${capitalize(moduleName[0])}${camelCase(moduleName.substr(1))}`,
      moduleNameUpper: snakeCase(moduleName).toUpperCase(),

      entityName: camelCase(entityName),
      entityNameKebab: kebabCase(entityName),
      entityNameCamel: camelCase(entityName),
      entityNameCapital: `${capitalize(entityName[0])}${camelCase(entityName.substr(1))}`,
      entityNameUpper: snakeCase(entityName).toUpperCase()
    };
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
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`./src/modules/module-${this.props.moduleNameKebab}`),
      this.props,
      undefined,
      {
        globOptions: { dot: true }
      }
    );
  }
};
