"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (fs) { return ({
    changeDirectoryTo: function (directoryPath) { return fs.readdirSync(directoryPath).map(function (project) { return directoryPath + project; }); },
    checkIfFileExists: function (absolutePathOfFile) { return fs.existsSync(absolutePathOfFile); }
}); };
