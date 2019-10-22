"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (fs) => {
    const git = require('simple-git');
    const gitPull = require('../utilities/gitPull').init(git);
    const gitUrl = require('../utilities/GitUrl');
    const parseBranchName = require('../utilities/parseBranchName');
    const gitUpdate = require('../utilities/gitUpdate');
    const gitCommit = require('../utilities/gitCommit');
    const openPr = require('../utilities/openPR');
    const google = require('./google');
    return {
        update: (path) => gitUpdate.init(fs, git).gitUpdate(path),
        pull: (workingDirectory, branchName) => gitPull.init(git).gitPull(workingDirectory, branchName),
        commit: (workingDirectory, commitMessage) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage),
        GitUrl: (executablePath) => google.searchGoogle(executablePath, gitUrl.gitUrl()),
        openPR: (executablePath) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle),
        parseBranch: (executablePath) => parseBranchName.parseGitBranch(executablePath)
    };
};
