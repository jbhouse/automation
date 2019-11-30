module.exports = (fs: any) => {
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
        update: (path: string) => gitUpdate(cmd, filters, git).gitUpdate(path)
        , checkout: (workingDirectory: string, branchName: string) => gitCheckout(git).gitCheckout(workingDirectory, branchName)
        , pull: (workingDirectory: string, branchName: string) => gitPull(git).gitPull(workingDirectory, branchName)
        , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit(git).gitCommit(workingDirectory, commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl.gitUrl())
        , openPR: (executablePath: string) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle, parseBranchName.parseGitBranch(process.cwd()))
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
        , popStashByName: (workingDirectory: string, stashName: string) => gitPopStash(git).popStash(workingDirectory, stashName)
    }
}