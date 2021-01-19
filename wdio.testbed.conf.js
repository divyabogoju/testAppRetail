const wdioConfig = require('./wdio.cucumber.conf');

wdioConfig.config.baseUrl = 'http://localhost:8080/automationTestbed';

wdioConfig.config.specs = ['./src/test/automation/testbed/**/*.feature'];

exports.config = wdioConfig.config;
