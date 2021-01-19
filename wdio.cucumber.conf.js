const wdioConf = require('./wdio.conf.js');

wdioConf.config.specs = ['./src/test/automation/features/**/*.feature'];
wdioConf.config.framework = 'cucumber';
wdioConf.config.cucumberOpts = {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> filetype:compiler used for processing required features
    compiler: [
        'js:babel-register',
    ],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
        './src/test/automation/steps/given.js',
        './src/test/automation/steps/then.js',
        './src/test/automation/steps/when.js',
        // Or search a (sub)folder for JS files with a wildcard
        // works since version 1.1 of the wdio-cucumber-framework
        //'./src/**/*.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: 'not @Pending',
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 20000,
};
delete wdioConf.config.mochaOpts;


exports.config = wdioConf.config;
