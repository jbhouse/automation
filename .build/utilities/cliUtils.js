"use strict";
var commandLineActions = require('./commandLine');
var google = require('./google');
var maven = require('./SpringBootRun');
module.exports = {
    changeDirectoryTo: function (directoryPath) { return commandLineActions.changeDirectoryTo(directoryPath); },
    checkIfFileExists: function (absoluteFilePath) { return commandLineActions.checkIfFileExists(absoluteFilePath); },
    google: function (executablePath, query) { return google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+")); },
    FilterOutput: function (filterKeys) { return maven.filterOutput(filterKeys); }
};
