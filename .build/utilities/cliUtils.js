"use strict";
var commandLineActions = require('./commandLine');
var google = require('./google');
var maven = require('./FilterCommandOutput');
module.exports = {
    changeDirectoryTo: (directoryPath) => commandLineActions.changeDirectoryTo(directoryPath),
    checkIfFileExists: (absoluteFilePath) => commandLineActions.checkIfFileExists(absoluteFilePath),
    google: (executablePath, query) => google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+")),
    FilterOutput: (command, filterKeys) => maven.filterOutput(command, filterKeys)
};
