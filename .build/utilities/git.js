"use strict";
var gitUpdate = require('../utilities/gitUpdate.js');
var gitPull = require('../utilities/gitPull.js');
var gitCommit = require('../utilities/gitCommit.js');
var goToGithub = require('../utilities/goToGithub.js');
module.exports = {
    update: function (path) { return gitUpdate.gitUpdate(path); },
    pull: function (workingDirectory, branchName) { return gitPull.gitPull(workingDirectory, branchName); },
    commit: function (workingDirectory, commitMessage) { return gitCommit.gitCommit(workingDirectory, commitMessage); },
    goToGithub: function (executablePath) { return goToGithub.goToGithub(executablePath); }
};
