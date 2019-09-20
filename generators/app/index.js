'use strict';
const { kebabCase } = require('lodash');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const Generator = require('yeoman-generator');

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

// Const Generator = require('../UniGenerator');

const CORE_LIBS_TYPE = [
  'Npm private repository (need access token)',
  'OS links to front-core and frontCore_Components folders'
  // New inquirer.Separator(),
];

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the\n' + chalk.red('generator-front-core' + '\n v ' + APP_VERSION) + ' generator!')
    );

    // https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'coreVersion',
        message: 'What core version do you use:',
        choices: CORE_VERSIONS,
        default: LAST_VERSION
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project id:',
        default: this.appname.replace(/ /gi, '-'), // Default to current folder name
        store: true,
        validate: (name) => !/ /gi.test(name), // без пробелов
      },
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Your project title:',
        default: ({ projectName }) => projectName
      },
      // {
      //   type: 'confirm',
      //   name: 'cool',
      //   message: 'Would you like to enable the Cool feature?'
      // },
      {
        type: 'list',
        choices: CORE_LIBS_TYPE,
        name: 'coreLibsType',
        message: 'What type to get Front Core libs:'
      },
      {
        type: 'input',
        name: 'privateNpmKey',
        message: 'Please write token for private npm:',
        validate: validateRequire,
        when: ({ coreLibsType }) => coreLibsType === CORE_LIBS_TYPE[0]
      },
      {
        type: 'input',
        name: 'pathToCoreLib',
        message: 'Please write path to FrontCore lib folder:',
        // validate: validateRequire,
        when: ({ coreLibsType }) => coreLibsType === CORE_LIBS_TYPE[1]
      },
      {
        type: 'input',
        name: 'pathToCoreComponentsLib',
        message: 'Please write path to FrontCore Components lib folder:',
        // validate: validateRequire,
        when: ({ coreLibsType }) => coreLibsType === CORE_LIBS_TYPE[1]
      }
    ]);

    const {
      projectName,
    } = answers;
    this.answers = answers;

    this.props = {
      stub: '',
      privateNpmKey: null,
      pathToCoreLib: null,
      pathToCoreComponentsLib: null,
      ...this.props,
      ...this.answers,
      projectNameKebab: kebabCase(projectName)
    };
  }

  writing() {
    // This.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );

    const {
      pathToCoreLib,
      pathToCoreComponentsLib
    } = this.props;

    commonWriting(this);

    // Const pkgJson = {
    //   devDependencies: {
    //     eslint: '^3.15.0'
    //   },
    //   dependencies: {
    //     react: '^16.2.0'
    //   }
    // };
    //
    // // Extend or create package.json file in destination path
    // this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    //
    //
    // this.fs.copyTpl(
    //   this.templatePath('index.html'),
    //   this.destinationPath('public/index.html'),
    //   { title: this.answers.title } // user answer `title` used
    // );
    if (pathToCoreLib) {
      this.fs.copy(pathToCoreLib, this.destinationPath('./coreLibs/front-core'));
    }
    if (pathToCoreComponentsLib) {
      this.fs.copy(
        pathToCoreComponentsLib,
        this.destinationPath('./coreLibs/frontCore_components')
      );
    }
  }

  install() {
    // вручную npm i сделать потом
    // this.installDependencies();
  }
};
