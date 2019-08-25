"use strict";
var gitUpdate = require('../utilities/gitUpdate');
var gitPull = require('../utilities/gitPull');
var gitCommit = require('../utilities/gitCommit');
var goToGithub = require('../utilities/goToGithub');
var openPr = require('../utilities/openPR');
var parseBranchName = require('../utilities/parseBranchName');
module.exports = {
    update: function (path) { return gitUpdate.gitUpdate(path); },
    pull: function (workingDirectory, branchName) { return gitPull.gitPull(workingDirectory, branchName); },
    commit: function (workingDirectory, commitMessage) { return gitCommit.gitCommit(workingDirectory, commitMessage); },
    goToGithub: function (executablePath) { return goToGithub.goToGithub(executablePath); },
    openPR: function (executablePath) { return openPr.openPR(executablePath); },
    parseBranch: function (executablePath) { return parseBranchName.parseGitBranch(executablePath); }
};
