module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // list of files / patterns to load in the browser
    files: [
        'vendor/angular/angular.js',
        'vendor/angular-route/angular-route.js',
        'vendor/angular-mocks/angular-mocks.js',
        'src/**/*.js'
    ],

    autoWatch : false,

    singleRun: true,
    
    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine'
    ],

    colors: true,

    reporters: ['progress']
  });
};