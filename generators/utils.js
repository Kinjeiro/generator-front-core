const rename = require('gulp-rename');

const { LAST_VERSION } = require('./core-versions');

function validateRequire(input) {
  // // Declare function as asynchronous, and save the done callback
  // var done = this.async();
  return Boolean(input);
}

function commonWriting(generator, templatePath = undefined, destinationPath = undefined) {
  generator.registerTransformStream(
    rename(path => {
      for (let prop in generator.props) {
        let regexp = new RegExp('\\$\\$' + prop + '\\$\\$', 'g');
        path.basename = path.basename.replace(regexp, generator.props[prop]);
        path.dirname = path.dirname.replace(regexp, generator.props[prop]);
      }
    })
  );
  console.warn('Props for templates:\n', JSON.stringify(generator.props, null, 2));
  const {
    coreVersion,
  } = generator.props;

  const coreVersionFinal = coreVersion || LAST_VERSION;

  generator.fs.copyTpl(
    templatePath
      ? generator.templatePath(coreVersionFinal, templatePath)
      : generator.templatePath(coreVersionFinal),
    destinationPath
      ? generator.destinationPath(destinationPath)
      : generator.destinationPath(),
    generator.props,
    undefined,
    {
      globOptions: { dot: true }
    }
  );
}

module.exports = {
  validateRequire,
  commonWriting
};
