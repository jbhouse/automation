"use strict";
var fs = require('fs');
var cmd = require('./commandLine');
module.exports = {
    isGitProject: function (absolutePath) { return fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'); },
    filterForGitProjects: function (projects) { return projects.filter(function (project) { return fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git'); }); },
    filterForFileName: function (projects, desiredFileName) { return projects.filter(function (project) { return project.includes(desiredFileName); }); }
};
