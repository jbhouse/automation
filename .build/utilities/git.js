"use strict";
let gitUpdate = require('../utilities/gitUpdate');
let gitPull = require('../utilities/gitPull');
let gitCommit = require('../utilities/gitCommit');
let GitUrl = require('../utilities/GitUrl');
let openPr = require('../utilities/openPR');
let parseBranchName = require('../utilities/parseBranchName');
var parse = require('parse-git-config');
var google = require('./google');
module.exports = {
    update: (path) => gitUpdate.gitUpdate(path),
    pull: (workingDirectory, branchName) => gitPull.gitPull(workingDirectory, branchName),
    commit: (workingDirectory, commitMessage) => gitCommit.gitCommit(workingDirectory, commitMessage),
    GitUrl: (executablePath) => google.searchGoogle(executablePath, GitUrl.gitUrl()),
    openPR: (executablePath) => openPr.openPR(executablePath, GitUrl.gitUrl()),
    parseBranch: (executablePath) => parseBranchName.parseGitBranch(executablePath)
};
