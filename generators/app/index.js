'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

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
      yosay('Welcome to the tiptop ' + chalk.red('generator-front-core') + ' generator!')
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
        default: this.appname, // Default to current folder name
        store: true
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

    this.answers = answers;
    this.props = {
      stub: '',
      privateNpmKey: null,
      pathToCoreLib: null,
      pathToCoreComponentsLib: null,
      ...this.props,
      ...this.answers
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
