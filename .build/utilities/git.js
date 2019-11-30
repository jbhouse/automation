"use strict";
module.exports = (fs) => {
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
    const gitBranches = require('./implementations/gitListBranches');
    const filters = require('./filters')(cmd, fs);
    return {
        update: (path) => gitUpdate(cmd, filters).gitUpdate(path, gitPull.gitPull),
        checkout: (workingDirectory, branchName) => gitCheckout.gitCheckout(workingDirectory, branchName, gitBranches.listBranches(process.cwd())),
        pull: (workingDirectory, branchName) => gitPull.gitPull(branchName, workingDirectory),
        commit: (workingDirectory, commitMessage) => gitCommit.gitCommit(workingDirectory, commitMessage),
        GitUrl: (executablePath) => google.searchGoogle(executablePath, gitUrl.gitUrl()),
        openPR: (executablePath) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle, parseBranchName.parseGitBranch(gitBranches.listBranches(process.cwd()))),
        parseBranch: (executablePath) => parseBranchName.parseGitBranch(gitBranches.listBranches(executablePath)),
        popStashByName: (workingDirectory, stashName) => gitPopStash.popStash(workingDirectory, stashName)
    };
};
