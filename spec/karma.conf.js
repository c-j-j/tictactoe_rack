// Karma configuration
// Generated on Sun Feb 22 2015 14:26:06 GMT+0000 (GMT)
module.exports = function(config) {
  config.set({ // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "assets/javascripts/vendor/jquery-2*.js",
      "spec/javascripts/helpers/*.js",
      "assets/javascripts/vendor/jquery.c*.js",
      "assets/javascripts/json_response_handler.js",
      "assets/javascripts/storage.js",
      "assets/javascripts/*.js",
      "spec/javascripts/helpers/*.js",
      "spec/javascripts/fixtures/**/*",
      "spec/javascripts/**/*spec.js",
      "spec/javascripts/stubs/*.js",
      "assets/coffeescripts/src/namespace.coffee",
      "assets/coffeescripts/src/temporary_storage.coffee",
      "assets/coffeescripts/src/**/*.coffee",
      "spec/coffeescripts/**/*.coffee"
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
