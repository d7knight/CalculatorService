module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'js/CalculatorService.js',
            'test/CalculatorService.spec.js'
        ],

        browsers: ['PhantomJS'],

        reporters: ['progress'],

        singleRun: true
    });
};