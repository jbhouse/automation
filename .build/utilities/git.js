"use strict";
module.exports = (fs) => {
    // can replace simple-git with child exec calls
    const git = require('simple-git');
    const gitPull = require('./implementations/gitPull');
    const gitCheckout = require('./implementations/gitCheckout');
    const gitUrl = require('./implementations/gitUrl');
    const gitUpdate = require('./implementations/gitUpdate');
    const gitCommit = require('./implementations/gitCommit');
    const gitPopStash = require('./implementations/git-pop-stash-by-name');
    const parseBranchName = require('./implementations/parseBranchName');
    const openPr = require('./implementations/openPR');
    const google = require('./implementations/google');
    const cmd = require('./implementations/commandLine')(fs);
    const filters = require('./filters')(cmd, fs);
    return {
        update: (path) => gitUpdate(cmd, filters, git).gitUpdate(path),
        checkout: (workingDirectory, branchName) => gitCheckout(git).gitCheckout(workingDirectory, branchName),
        pull: (workingDirectory, branchName) => gitPull(git).gitPull(workingDirectory, branchName),
        commit: (workingDirectory, commitMessage) => gitCommit(git).gitCommit(workingDirectory, commitMessage),
        GitUrl: (executablePath) => google.searchGoogle(executablePath, gitUrl.gitUrl()),
        openPR: (executablePath) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle),
        parseBranch: (executablePath) => parseBranchName.parseGitBranch(executablePath),
        popStashByName: (workingDirectory, stashName) => gitPopStash(git).popStash(workingDirectory, stashName)
    };
};
