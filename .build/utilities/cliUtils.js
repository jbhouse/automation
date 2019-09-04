"use strict";
var commandLineActions = require('./commandLine');
var google = require('./google');
module.exports = {
    changeDirectoryTo: function (directoryPath) { return commandLineActions.changeDirectoryTo(directoryPath); },
    checkIfFileExists: function (absoluteFilePath) { return commandLineActions.checkIfFileExists(absoluteFilePath); },
    google: function (executablePath, query) { return google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+")); }
};
