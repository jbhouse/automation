"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (fs) => {
    const git = require('simple-git');
    const gitPull = require('./implementations/gitPull');
    const gitUrl = require('./implementations/gitUrl');
    const gitUpdate = require('./implementations/gitUpdate');
    const gitCommit = require('./implementations/gitCommit');
    const gitPopStash = require('./implementations/git-pop-stash-by-name');
    const parseBranchName = require('./implementations/parseBranchName');
    const openPr = require('./implementations/openPR');
    const google = require('./implementations/google');
    return {
        update: (path) => gitUpdate.init(fs, git).gitUpdate(path),
        pull: (workingDirectory, branchName) => gitPull.init(git).gitPull(workingDirectory, branchName),
        commit: (workingDirectory, commitMessage) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage),
        GitUrl: (executablePath) => google.searchGoogle(executablePath, gitUrl.gitUrl()),
        openPR: (executablePath) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle),
        parseBranch: (executablePath) => parseBranchName.parseGitBranch(executablePath),
        popStashByName: (workingDirectory, stashName) => gitPopStash.init(git).popStash(workingDirectory, stashName)
    };
};
