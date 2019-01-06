module.exports = function(config) {
  config.set({
    //browsers: ['Chrome'],
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};
