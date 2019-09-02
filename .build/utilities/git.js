"use strict";
var gitUpdate = require('../utilities/gitUpdate');
var gitPull = require('../utilities/gitPull');
var gitCommit = require('../utilities/gitCommit');
var GitUrl = require('../utilities/GitUrl');
var openPr = require('../utilities/openPR');
var parseBranchName = require('../utilities/parseBranchName');
var parse = require('parse-git-config');
var google = require('./google');
module.exports = {
    update: function (path) { return gitUpdate.gitUpdate(path); },
    pull: function (workingDirectory, branchName) { return gitPull.gitPull(workingDirectory, branchName); },
    commit: function (workingDirectory, commitMessage) { return gitCommit.gitCommit(workingDirectory, commitMessage); },
    GitUrl: function (executablePath) { return google.searchGoogle(executablePath, GitUrl.gitUrl()); },
    openPR: function (executablePath) { return openPr.openPR(executablePath, GitUrl.gitUrl()); },
    parseBranch: function (executablePath) { return parseBranchName.parseGitBranch(executablePath); }
};
