"use strict";
var fs = require('fs');
var cmd = require('./commandLine');
module.exports = {
    isGitProject: (absolutePath) => fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'),
    filterForGitProjects: (projects) => projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')),
    filterForFileName: (projects, desiredFileName) => projects.filter((project) => project.includes(desiredFileName))
};
