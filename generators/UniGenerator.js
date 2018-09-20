'use strict';
const Generator = require('yeoman-generator');
const rename = require('gulp-rename');

module.exports = class extends Generator {
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

  install() {
    this.installDependencies();
  }
};
