"use strict";
var fs = require('fs');
module.exports = {
    /**
     *
     * cds to the given directory and lists out everything there that passes the filter
     *
     */
    changeDirectoryTo: function (directoryPath) {
        return fs.readdirSync(directoryPath).map(function (project) { return directoryPath + project; });
    },
    checkIfFileExists: function (absolutePathOfFile) { return fs.existsSync(absolutePathOfFile); },
};
