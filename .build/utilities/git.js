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
        checkout: (workingDirectory, branchName) => gitCheckout.gitCheckout(branchName, gitBranches.listBranches, workingDirectory),
        pull: (workingDirectory, branchName) => gitPull.gitPull(branchName, workingDirectory),
        commit: (workingDirectory, commitMessage) => parseBranchName.parseGitBranch(gitBranches.listBranches, gitCommit.gitCommit(workingDirectory, commitMessage), workingDirectory)
        // gitCommit.gitCommit(workingDirectory, parseBranchName.parseGitBranch(gitBranches.listBranches) + ": " + commitMessage)
        ,
        GitUrl: (executablePath) => google.searchGoogle(executablePath, gitUrl(cmd).gitUrl()),
        openPR: (googleChromeExecutablePath) => parseBranchName.parseGitBranch(gitBranches.listBranches, openPr.openPR(googleChromeExecutablePath, gitUrl(cmd).gitUrl(), google.searchGoogle)),
        parseBranch: (executablePath) => parseBranchName.parseGitBranch(gitBranches.listBranches, console.log, executablePath),
        popStashByName: (workingDirectory, stashName) => gitPopStash.popStash(workingDirectory, stashName)
    };
};
