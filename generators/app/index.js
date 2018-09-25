'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require('gulp-rename');
const Generator = require('yeoman-generator');

// Const Generator = require('../UniGenerator');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the tiptop ' + chalk.red('generator-front-core') + ' generator!')
    );

    console.warn('ANKU , this._globalConfig', this._globalConfig);

    // https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project id',
        default: this.appname, // Default to current folder name
        store: true
      },
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Your project title',
        default: ({ projectName }) => projectName
      },
      // {
      //   type: 'confirm',
      //   name: 'cool',
      //   message: 'Would you like to enable the Cool feature?'
      // },
      {
        type: 'input',
        name: 'privateNpmKey',
        message: 'Please write token for private npm'
      }
    ]);

    this.answers = answers;
    this.props = {
      ...this.props,
      ...this.answers
    };

    this.log('app name', answers.name);
    this.log('cool feature', answers.cool);
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
    // This.fs.copyTpl(this.templatePath('**/*'), this.destinationPath('.'), this.props);
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), this.props, undefined, {
      globOptions: { dot: true }
    });

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
  }


  // todo @ANKU @CRIT @MAIN @DEBUG -
  // install() {
  //   this.installDependencies();
  // }
};
