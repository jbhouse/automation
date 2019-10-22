"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (fs) {
    var cmd = require('./commandLine').init(fs);
    return {
        isGitProject: function (absolutePath) { return fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'); },
        filterForGitProjects: function (projects) { return projects.filter(function (project) { return fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git'); }); },
        filterForFileName: function (projects, desiredFileName) { return projects.filter(function (project) { return project.includes(desiredFileName); }); }
    };
};
