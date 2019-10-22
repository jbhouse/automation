"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (fs) {
    var gitPull = require('../utilities/gitPull').init();
    var GitUrl = require('../utilities/GitUrl').init();
    var parseBranchName = require('../utilities/parseBranchName').init();
    var gitUpdate = require('../utilities/gitUpdate');
    var gitCommit = require('../utilities/gitCommit');
    var openPr = require('../utilities/openPR');
    var google = require('./google').init();
    var git = require('simple-git');
    return {
        update: function (path) { return gitUpdate.init(fs, git).gitUpdate(path); },
        pull: function (workingDirectory, branchName) { return gitPull.init(git).gitPull(workingDirectory, branchName); },
        commit: function (workingDirectory, commitMessage) { return gitCommit.init(git).gitCommit(workingDirectory, commitMessage); },
        GitUrl: function (executablePath) { return google.searchGoogle(executablePath, GitUrl.gitUrl()); },
        openPR: function (executablePath) { return openPr.openPR(executablePath, GitUrl.gitUrl(), google.searchGoogle); },
        parseBranch: function (executablePath) { return parseBranchName.parseGitBranch(executablePath); }
    };
};
